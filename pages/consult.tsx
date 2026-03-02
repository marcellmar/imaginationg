import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

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
  startHour: 10,
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
  const router = useRouter();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({ name: '', email: '', company: '', context: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // From diagnostic
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
        context: `GPI ${fromGpi} overall. Highest friction: ${fromDimLabel}.`,
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
    try {
      const res = await fetch('/api/book-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slot: selectedSlot }),
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
        title="Book a GPI Consult | gpi.studio"
        description="One hour. A clear read on where your org is losing speed and what to do about it. First session free."
      />
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <main className="max-w-4xl mx-auto px-6 py-16">

          <div className="mb-12">
            <p className="text-xs tracking-widest text-zinc-500 uppercase mb-4">GPI CONSULT</p>
            {fromGpi && fromDimLabel ? (
              <>
                <h1 className="text-4xl font-black leading-tight mb-5">One hour. Starting with {fromDimLabel}.</h1>
                <div className="bg-zinc-950 border border-zinc-800 p-4 mb-5 max-w-xl">
                  <div className="text-xs font-mono text-zinc-600 mb-1">FROM YOUR DIAGNOSTIC</div>
                  <p className="text-zinc-300">
                    GPI <span className="text-white font-black">{fromGpi}</span> overall. Highest friction: <span className="text-red-400 font-bold">{fromDimLabel}</span>.
                  </p>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  You bring the context. I already have your scores. We'll dig into {fromDimLabel} first and work outward from there.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-black leading-tight mb-5">One hour. No fluff.</h1>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  You bring the org. I run GPI on it live. By the end you'll know exactly where it's calcifying and what to do about it.
                </p>
              </>
            )}
            <p className="text-zinc-600 text-sm mt-3">First session free. No pitch at the end.</p>
          </div>

          {submitted ? (
            <div className="border border-zinc-800 p-10 text-center max-w-md">
              <h2 className="text-2xl font-black mb-3">You're booked.</h2>
              <p className="text-zinc-400">Check your inbox for confirmation. See you then.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Calendar */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className="text-zinc-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed px-2 py-1 text-lg"
                  >
                    ←
                  </button>
                  <span className="text-sm font-semibold tracking-widest uppercase text-zinc-300">
                    {MONTHS[viewMonth]} {viewYear}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="text-zinc-500 hover:text-white px-2 py-1 text-lg"
                  >
                    →
                  </button>
                </div>

                {/* Day of week headers */}
                <div className="grid grid-cols-7 mb-2">
                  {DOW.map(d => (
                    <div key={d} className="text-center text-xs text-zinc-600 py-1">{d}</div>
                  ))}
                </div>

                {/* Day cells */}
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
                        className={`aspect-square flex items-center justify-center text-sm rounded transition-all ${
                          isSelected
                            ? 'bg-white text-black font-bold'
                            : available
                            ? 'text-white hover:bg-zinc-800 cursor-pointer'
                            : 'text-zinc-700 cursor-default'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-zinc-600 mt-4">Mon – Fri, 10am – 3pm CST</p>

                {/* Time slots */}
                {selectedDate && (
                  <div className="mt-6">
                    <p className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
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
                                ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed'
                                : isActive
                                ? 'bg-white text-black'
                                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white'
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
                    <div className="bg-zinc-900 px-4 py-3 text-sm text-zinc-300 mb-2">
                      {new Date(selectedSlot).toLocaleString('en-US', {
                        weekday: 'long', month: 'long', day: 'numeric',
                        hour: 'numeric', minute: '2-digit',
                        timeZone: AVAILABILITY.timezone, timeZoneName: 'short',
                      })}
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-zinc-500 uppercase mb-2">Name</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:border-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-zinc-500 uppercase mb-2">Email</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:border-white"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-zinc-500 uppercase mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:border-white"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-zinc-500 uppercase mb-2">What do you want to figure out?</label>
                      <textarea
                        rows={4}
                        value={form.context}
                        onChange={e => setForm(f => ({ ...f, context: e.target.value }))}
                        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:border-white resize-none"
                        placeholder="What's the problem, or the behavior you can't explain?"
                      />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                      type="submit" disabled={loading}
                      className="w-full bg-white text-black py-4 font-black text-sm tracking-widest uppercase hover:bg-zinc-200 transition-all disabled:opacity-50"
                    >
                      {loading ? 'BOOKING...' : 'BOOK THE HOUR'}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-48 border border-zinc-900">
                    <p className="text-zinc-600 text-sm">Pick a date and time to continue.</p>
                  </div>
                )}
              </div>

            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default ConsultPage;
