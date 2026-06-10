import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DIM_LABELS: Record<string, string> = {
  DECISION_LATENCY: 'Decision Latency',
  ERROR_CORRECTION: 'Error Correction',
  KNOWLEDGE_LOCATION: 'Knowledge Location',
  KNOWLEDGE_VELOCITY: 'Knowledge Velocity',
  TALENT_FLOW: 'Talent Flow',
  STRUCTURAL_LOCKIN: 'Structural Lock-In',
  CAPITAL_INTENSITY: 'Capital Intensity',
};

const AVAILABILITY = {
  days: [1, 2, 3, 4, 5],
  startHour: 7,
  endHour: 15,
  timezone: 'America/Chicago',
};

function isoToCST(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', timeZone: AVAILABILITY.timezone,
  });
}

function getSlotsForDate(date: Date): string[] {
  const slots: string[] = [];
  for (let h = AVAILABILITY.startHour; h < AVAILABILITY.endHour; h++) {
    const slot = new Date(date);
    slot.setHours(h, 0, 0, 0);
    slots.push(slot.toISOString());
  }
  return slots;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW = ['Su','Mo','Tu','We','Th','Fr','Sa'];

const ConsultPage: NextPage = () => {
  useScrollReveal();
  const router = useRouter();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    stuckPoint: '',
    repeatedPattern: '',
    sessionFocus: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fromGpi = router.query.gpi as string | undefined;
  const fromDim = router.query.dim as string | undefined;
  const fromDimLabel = fromDim ? (DIM_LABELS[fromDim] || fromDim) : null;

  useEffect(() => {
    fetch('/api/booked-slots')
      .then(r => r.json())
      .then(data => setBookedSlots(new Set(data.slots || [])))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (fromGpi && fromDimLabel) {
      setForm(f => ({
        ...f,
        stuckPoint: `GPI ${fromGpi} overall. Highest friction: ${fromDimLabel}.`,
      }));
    }
  }, [fromGpi, fromDimLabel]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const isAvailableDay = (d: Date) => {
    if (d <= today) return false;
    return AVAILABILITY.days.includes(d.getDay());
  };

  const handleDayClick = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    if (!isAvailableDay(d)) return;
    setSelectedDate(d);
    setSelectedSlot(null);
  };

  const slotsForSelected = selectedDate ? getSlotsForDate(selectedDate) : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) { setError('Pick a time.'); return; }
    if (!form.name || !form.email) { setError('Name and email required.'); return; }
    setLoading(true);
    setError('');
    const context = [
      fromGpi ? `Signal: GPI ${fromGpi}${fromDimLabel ? `, highest friction: ${fromDimLabel}` : ''}.` : '',
      form.stuckPoint ? `What feels stuck: ${form.stuckPoint}` : '',
      form.repeatedPattern ? `Pattern that keeps repeating: ${form.repeatedPattern}` : '',
      form.sessionFocus ? `Working-session focus: ${form.sessionFocus}` : '',
    ].filter(Boolean).join('\n\n');

    try {
      const res = await fetch('/api/book-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          context,
          slot: selectedSlot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        if (res.status === 409) {
          setBookedSlots(prev => { const s = new Set(Array.from(prev)); s.add(selectedSlot); return s; });
          setSelectedSlot(null);
        }
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  return (
    <>
      <SEOHead
        title="GPI Intake | GPI Studio"
        description="Bring the pattern, add enough context, and book a GPI working session."
      />
      <div className="gpi-page">
        <Navigation currentPage="diagnostic" />

        <main className="gpi-shell py-14 md:py-20">

          <div className="mb-12 max-w-4xl fade-up">
            <div className="gpi-kicker mb-6">
              GPI Intake
            </div>
            {fromGpi && fromDimLabel ? (
              <>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-headline md:text-6xl">
                  Bring the context behind the read.
                </h1>
                <div className="mt-6 border-l border-stone-300 pl-4 max-w-xl">
                  <div className="text-xs font-mono font-bold uppercase text-stone-600 mb-1">From Signal</div>
                  <p className="text-stone-600">
                    GPI <span className="text-stone-950 font-bold">{fromGpi}</span>. Highest friction: <span className="text-red-800 font-bold">{fromDimLabel}</span>.
                  </p>
                </div>
                <p className="gpi-prose mt-6 max-w-2xl text-stone-800">
                  The number is only useful if it connects to the real pattern. Use this page to name what keeps repeating, then pick a time to work through it.
                </p>
              </>
            ) : (
              <>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-headline md:text-6xl">
                  Bring the pattern. Then book the hour.
                </h1>
                <p className="gpi-prose mt-6 max-w-2xl text-stone-800">
                  A useful session starts before the calendar. Name where the work slows down, what keeps returning, and what needs a cleaner read.
                </p>
              </>
            )}
            <p className="mt-4 font-mono text-xs text-stone-600">The first hour is a fit check and a working read.</p>
          </div>

          {submitted ? (
            <div className="border-t border-stone-300 py-10 max-w-md fade-up">
              <h2 className="text-2xl font-bold mb-3">You are booked.</h2>
              <p className="text-stone-700">A confirmation is on its way. The session will start with the pattern you named here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-up">

              {/* Calendar */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className="text-stone-400 hover:text-stone-900 disabled:opacity-20 disabled:cursor-not-allowed px-2 py-1 text-lg transition-colors"
                  >
                    ←
                  </button>
                  <span className="text-sm font-semibold tracking-widest uppercase text-stone-600">
                    {MONTHS[viewMonth]} {viewYear}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="text-stone-400 hover:text-stone-900 px-2 py-1 text-lg transition-colors"
                  >
                    →
                  </button>
                </div>

                <div className="grid grid-cols-7 mb-2">
                  {DOW.map(d => (
                    <div key={d} className="text-center text-xs text-stone-400 py-1">{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const d = new Date(viewYear, viewMonth, day);
                    const available = isAvailableDay(d);
                    const isSelected = selectedDate?.getDate() === day &&
                      selectedDate?.getMonth() === viewMonth &&
                      selectedDate?.getFullYear() === viewYear;

                    return (
                      <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        disabled={!available}
                        className={`aspect-square flex items-center justify-center text-sm transition-all ${
                          isSelected
                            ? 'bg-stone-900 text-white font-bold'
                            : available
                            ? 'text-stone-900 hover:bg-stone-100 cursor-pointer'
                            : 'text-stone-300 cursor-default'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-stone-600 mt-4">Mon-Fri, 7am-3pm CST</p>

                {selectedDate && (
                  <div className="mt-6">
                    <p className="text-xs tracking-widest text-stone-400 uppercase mb-3">
                      {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {slotsForSelected.map(slot => {
                        const isBooked = bookedSlots.has(slot);
                        const isActive = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            disabled={isBooked}
                            onClick={() => setSelectedSlot(isActive ? null : slot)}
                            className={`px-4 py-2 text-sm font-medium transition-all ${
                              isBooked
                                ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                                : isActive
                                ? 'bg-stone-900 text-white'
                                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                            }`}
                          >
                            {isoToCST(slot)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Form */}
              <div>
                {selectedSlot ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="bg-stone-100 px-4 py-3 text-sm text-stone-600 mb-2">
                      {new Date(selectedSlot).toLocaleString('en-US', {
                        weekday: 'long', month: 'long', day: 'numeric',
                        hour: 'numeric', minute: '2-digit',
                        timeZone: AVAILABILITY.timezone, timeZoneName: 'short',
                      })}
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-stone-400 uppercase mb-2">Name</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-stone-400 uppercase mb-2">Email</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-stone-400 uppercase mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-stone-400 uppercase mb-2">What feels stuck?</label>
                      <textarea
                        rows={4}
                        value={form.stuckPoint}
                        onChange={e => setForm(f => ({ ...f, stuckPoint: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 resize-none"
                        placeholder="Where does the work slow down, loop, or get harder than it should?"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-stone-400 uppercase mb-2">What keeps repeating?</label>
                      <textarea
                        rows={3}
                        value={form.repeatedPattern}
                        onChange={e => setForm(f => ({ ...f, repeatedPattern: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 resize-none"
                        placeholder="The same meeting, delay, conflict, workaround, customer issue, or decision pattern."
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-stone-400 uppercase mb-2">What should the session help clarify?</label>
                      <textarea
                        rows={3}
                        value={form.sessionFocus}
                        onChange={e => setForm(f => ({ ...f, sessionFocus: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 resize-none"
                        placeholder="A decision, team pattern, system problem, offer question, or next move."
                      />
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                      type="submit" disabled={loading}
                      className="w-full bg-stone-900 text-white py-4 font-semibold text-sm hover:bg-stone-800 transition-all disabled:opacity-50"
                    >
                      {loading ? 'Booking...' : 'Book the working session'}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-48 border border-stone-200">
                    <p className="text-stone-600 text-sm">Pick a date and time to open the intake questions.</p>
                  </div>
                )}
              </div>

            </div>
          )}
        </main>

        <footer className="gpi-rule">
          <div className="gpi-shell flex flex-col gap-3 py-8 font-mono text-xs text-stone-600 md:flex-row md:items-center md:justify-between">
            <div>GPI Studio. Operating intelligence for companies in motion.</div>
            <div>marcus@gpi.studio · gpi.studio</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConsultPage;
