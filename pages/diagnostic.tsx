import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const DiagnosticPage = () => {
  useEffect(() => {
    // This script will run only on the client side after the component is mounted
    // Add a small delay to ensure DOM elements are fully loaded
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setTimeout(() => {
        const script = document.createElement('script');
        script.setAttribute('data-diagnostic', 'true');
        script.innerHTML = `
        // Create global objects
        window.answers = {};
        window.answeredCount = 0;
        window.startTime = Date.now();

        // Timer countdown
        window.countdown = 60;
        window.timerInterval = setInterval(() => {
          const countdownElement = document.getElementById('countdown');
          if (countdownElement) {
            window.countdown--;
            countdownElement.textContent = window.countdown;
            if (window.countdown <= 0) {
              clearInterval(window.timerInterval);
              const timerElement = document.getElementById('timer');
              if (timerElement) {
                timerElement.textContent = "Time's up! But take your time to face the truth...";
              }
            }
          } else {
            // If element not found, clear the interval
            clearInterval(window.timerInterval);
          }
        }, 1000);

      // Set up click handlers for all the buttons
      const buttons = document.querySelectorAll('.btn-yes, .btn-no');
      if (buttons.length > 0) {
        buttons.forEach(button => {
          button.addEventListener('click', function() {
            const card = this.closest('.signal-card');
            if (!card) return;

            const signal = parseInt(card.getAttribute('data-signal'));
            const answer = this.classList.contains('btn-yes') ? 'yes' : 'no';

            // Same logic as before but defined and executed here
            window.answers[signal] = answer;

            // Get references
            const yesBtn = card.querySelector('.btn-yes');
            const noBtn = card.querySelector('.btn-no');
            const details = document.getElementById('details-' + signal);

            // Update UI - with null checks
            if (yesBtn && noBtn) {
              if (answer === 'yes') {
                yesBtn.classList.add('selected');
                noBtn.classList.remove('selected');
                card.classList.add('active');
              } else {
                noBtn.classList.add('selected');
                yesBtn.classList.remove('selected');
                card.classList.remove('active');
              }
            }

            // Show details based on answer - with null check
            if (details) {
              // Show drift detected when answer indicates a problem
              if ((signal === 1 && answer === 'no') || 
                  (signal === 2 && answer === 'yes') || 
                  (signal === 3 && answer === 'yes') || 
                  (signal === 4 && answer === 'yes') || 
                  (signal === 5 && answer === 'no')) {
                details.classList.add('show');
              } else {
                details.classList.remove('show');
              }
            }

            // Update progress - with null check
            window.answeredCount = Object.keys(window.answers).length;
            const progress = (window.answeredCount / 5) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
              progressBar.style.width = progress + '%';
            }

            // Show results if all answered
            if (window.answeredCount === 5) {
              showResults();
            }
          });
        });
      }

      // Function to show results
      function showResults() {
        const results = document.getElementById('results');
        if (!results) return;

        results.classList.add('show');

        // Calculate drift score and determine weapon
        let driftScore = 0;
        let recommendedWeapon = '';
        let weaponUrl = '';
        
        if (window.answers[1] === 'no') driftScore++; // No clarity
        if (window.answers[2] === 'yes') driftScore++; // Dead network
        if (window.answers[3] === 'yes') driftScore++; // Market guessing
        if (window.answers[4] === 'yes') driftScore++; // Planning paralysis
        if (window.answers[5] === 'no') driftScore++; // No shipping

        // Determine weapon based on answers
        if (window.answers[1] === 'no') {
          recommendedWeapon = 'Clarity Collision';
          weaponUrl = '/weapons/clarity-catalyst-call';
        } else if (window.answers[2] === 'yes') {
          recommendedWeapon = 'Ecosystem Collision Map';
          weaponUrl = '/weapons/ecosystem-map';
        } else if (window.answers[3] === 'yes') {
          recommendedWeapon = 'Market Smackdown';
          weaponUrl = '/weapons/pre-market-signal-scan';
        } else if (window.answers[4] === 'yes') {
          recommendedWeapon = '30-Day Drift Break';
          weaponUrl = '/weapons/movement-sprint';
        } else if (window.answers[5] === 'no') {
          recommendedWeapon = 'First Blood Build';
          weaponUrl = '/weapons/mvp-jumpstart';
        } else {
          recommendedWeapon = 'Clarity Collision';
          weaponUrl = '/weapons/clarity-catalyst-call';
        }

        // Update score display - with null checks
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
          scoreElement.textContent = \`\${driftScore}/5\`;

          // Set status message
          const scoreMessage = document.getElementById('score-message');
          if (driftScore <= 1) {
            scoreElement.className = 'drift-score score-low';
            if (scoreMessage) scoreMessage.textContent = "You're moving! Minor adjustments needed.";
          } else if (driftScore <= 3) {
            scoreElement.className = 'drift-score score-medium';
            if (scoreMessage) scoreMessage.textContent = "Warning: Drift detected. Time to pick your weapon.";
          } else {
            scoreElement.className = 'drift-score score-high';
            if (scoreMessage) scoreMessage.textContent = "Critical: You're fully drifting. Immediate action required.";
          }
        }

        // Update weapon recommendation
        const weaponRec = document.getElementById('weapon-recommendation');
        if (weaponRec) {
          weaponRec.innerHTML = \`
            <h3>Your Prescribed Weapon:</h3>
            <div class="weapon-card">
              <h4>\${recommendedWeapon}</h4>
              <p>Based on your drift patterns, this is the intervention you need.</p>
              <a href="\${weaponUrl}" class="weapon-button">DEPLOY THIS WEAPON</a>
            </div>
          \`;
        }

        // Generate personalized action plan
        const planContainer = document.getElementById('action-plan');
        if (planContainer) {
          let plan = '';

          if (window.answers[1] === 'no') {
            plan += '<div class="plan-item">TODAY: Write your vision in 10 words. Or stay lost forever.</div>';
          }
          if (window.answers[2] === 'yes') {
            plan += '<div class="plan-item">TODAY: Kill 5 dead relationships. Find 3 collision partners.</div>';
          }
          if (window.answers[3] === 'yes') {
            plan += '<div class="plan-item">TODAY: Call 3 real customers. Stop hiding behind surveys.</div>';
          }
          if (window.answers[4] === 'yes') {
            plan += '<div class="plan-item">TODAY: Pick ONE thing. Ship in 48 hours. No excuses.</div>';
          }
          if (window.answers[5] === 'no') {
            plan += '<div class="plan-item">THIS WEEK: Build something ugly that works. Bleed for it.</div>';
          }

          if (!plan) {
            plan = '<div class="plan-item">You think you\\'re moving. You\\'re not. Move faster.</div>';
          }

          planContainer.innerHTML = plan;
        }

        // Scroll to results - with smooth behavior
        results.scrollIntoView({ behavior: 'smooth' });
      }

      // Set up chat button
      const chatButton = document.querySelector('.live-chat');
      if (chatButton) {
        chatButton.addEventListener('click', function() {
          window.open('https://wa.me/17737044833', '_blank');
        });
      }
    `;
          // Append the script to the document body
          if (typeof document !== 'undefined') {
            document.body.appendChild(script);
          }
        }, 500); // 500ms delay to ensure DOM is ready

        // Clean up function
        return () => {
          const script = document.querySelector('script[data-diagnostic]');
          if (script && script.parentNode) {
            document.body.removeChild(script);
          }
        };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Stop Drifting. Start Moving. | IMAGINATION G</title>
        <meta name="description" content="Find out if you're moving or just drifting in 60 seconds. Get your prescribed weapon." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div dangerouslySetInnerHTML={{ 
        __html: `
        <div class="progress-bar">
            <div class="progress-fill" id="progressBar"></div>
        </div>

        <div class="container">
            <div className="site-header" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; margin-bottom: 2rem;">
              <a href="/" style="font-size: 1.5rem; font-weight: bold; color: white; text-decoration: none;">
                IMAGINATION G
              </a>
              <a href="/" style="color: #999; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.2rem;">←</span> Back to Home
              </a>
            </div>
            
            <div class="hero">
                <h1>Are You Moving or Just Drifting?</h1>
                <p class="subtitle">Find out in 60 seconds. Get your prescribed weapon.</p>
                <div class="timer" id="timer">Time to truth: <span id="countdown">60</span> seconds</div>
            </div>

            <div class="intro-box">
                <strong>WARNING:</strong> This diagnostic will expose your drift patterns. 
                Most people are drifting in at least 3 areas. The good news? 
                We'll prescribe the exact weapon you need to break free.
            </div>

            <div class="diagnostic">
                <div class="diagnostic-intro">
                    <h2>Answer These 5 Questions</h2>
                    <p>Be honest. Your future depends on it.</p>
                </div>

                <!-- Signal 1 -->
                <div class="signal-card" data-signal="1">
                    <div class="signal-header">
                        <div class="signal-number">1</div>
                        <div class="signal-content">
                            <h3 class="signal-title">Your Clarity</h3>
                            <p class="signal-symptom">Can you explain your vision in one sentence? Without corporate BS?</p>
                        </div>
                        <div class="signal-indicator">
                            <div class="yes-no-buttons">
                                <button class="btn-yes">YES</button>
                                <button class="btn-no">NO</button>
                            </div>
                        </div>
                    </div>
                    <div class="signal-details" id="details-1">
                        <div class="immediate-action">
                            <p class="action-title">DRIFT DETECTED:</p>
                            <p>You can't even explain why you exist. Your team is lost. You need clarity collision.</p>
                        </div>
                    </div>
                </div>

                <!-- Signal 2 -->
                <div class="signal-card" data-signal="2">
                    <div class="signal-header">
                        <div class="signal-number">2</div>
                        <div class="signal-content">
                            <h3 class="signal-title">Your Network</h3>
                            <p class="signal-symptom">Same LinkedIn connections? Same useless meetings? Same dead relationships?</p>
                        </div>
                        <div class="signal-indicator">
                            <div class="yes-no-buttons">
                                <button class="btn-yes">YES</button>
                                <button class="btn-no">NO</button>
                            </div>
                        </div>
                    </div>
                    <div class="signal-details" id="details-2">
                        <div class="immediate-action">
                            <p class="action-title">DRIFT DETECTED:</p>
                            <p>Your network is dead. You need real collisions, not coffee chats.</p>
                        </div>
                    </div>
                </div>

                <!-- Signal 3 -->
                <div class="signal-card" data-signal="3">
                    <div class="signal-header">
                        <div class="signal-number">3</div>
                        <div class="signal-content">
                            <h3 class="signal-title">Your Market</h3>
                            <p class="signal-symptom">Still guessing what customers want? Still hoping? Still researching?</p>
                        </div>
                        <div class="signal-indicator">
                            <div class="yes-no-buttons">
                                <button class="btn-yes">YES</button>
                                <button class="btn-no">NO</button>
                            </div>
                        </div>
                    </div>
                    <div class="signal-details" id="details-3">
                        <div class="immediate-action">
                            <p class="action-title">DRIFT DETECTED:</p>
                            <p>You're hiding from market truth. Face the smackdown or keep bleeding.</p>
                        </div>
                    </div>
                </div>

                <!-- Signal 4 -->
                <div class="signal-card" data-signal="4">
                    <div class="signal-header">
                        <div class="signal-number">4</div>
                        <div class="signal-content">
                            <h3 class="signal-title">Your Momentum</h3>
                            <p class="signal-symptom">Been "planning" the same thing for over 30 days?</p>
                        </div>
                        <div class="signal-indicator">
                            <div class="yes-no-buttons">
                                <button class="btn-yes">YES</button>
                                <button class="btn-no">NO</button>
                            </div>
                        </div>
                    </div>
                    <div class="signal-details" id="details-4">
                        <div class="immediate-action">
                            <p class="action-title">DRIFT DETECTED:</p>
                            <p>Planning is procrastination. You need forced movement. Now.</p>
                        </div>
                    </div>
                </div>

                <!-- Signal 5 -->
                <div class="signal-card" data-signal="5">
                    <div class="signal-header">
                        <div class="signal-number">5</div>
                        <div class="signal-content">
                            <h3 class="signal-title">Your Shipping</h3>
                            <p class="signal-symptom">Got a working prototype? Something real? Something bleeding?</p>
                        </div>
                        <div class="signal-indicator">
                            <div class="yes-no-buttons">
                                <button class="btn-yes">YES</button>
                                <button class="btn-no">NO</button>
                            </div>
                        </div>
                    </div>
                    <div class="signal-details" id="details-5">
                        <div class="immediate-action">
                            <p class="action-title">DRIFT DETECTED:</p>
                            <p>All talk, no blood. Ship something or stay irrelevant.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="results-section" id="results">
                <h2>Your Drift Score</h2>
                <div class="drift-score" id="score">0/5</div>
                <p id="score-message"></p>

                <div id="weapon-recommendation" class="weapon-recommendation"></div>

                <div class="personalized-plan">
                    <h3>Your Immediate Action Plan</h3>
                    <div id="action-plan"></div>
                </div>

                <div class="cta-final">
                    <h3>Ready to Stop Drifting?</h3>
                    <p>You've identified the patterns. Now deploy your weapon.</p>
                    <div class="cta-buttons">
                        <a href="/weapons" class="btn-primary">VIEW ALL WEAPONS</a>
                        <a href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" class="btn-secondary" target="_blank" rel="noopener noreferrer">BOOK IMMEDIATE INTERVENTION</a>
                    </div>
                    <p style="margin-top: 1rem; font-style: italic;">
                        Warning: 87% of people who take this diagnostic are still drifting 30 days later. Don't be one of them.
                    </p>
                </div>
            </div>
        </div>

        <div class="live-chat">
            💬 Need Truth?
        </div>
        `
      }} />

      <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #000;
            color: #fff;
            line-height: 1.6;
        }

        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(255,255,255,0.1);
            z-index: 1000;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff0000, #00ff00);
            width: 0%;
            transition: width 0.3s ease;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }

        .hero {
            text-align: center;
            padding: 4rem 0;
            position: relative;
        }

        .hero h1 {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .hero .subtitle {
            font-size: 1.25rem;
            color: #999;
            margin-bottom: 2rem;
        }

        .timer {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ff0000;
            margin-bottom: 2rem;
        }

        .intro-box {
            background: rgba(255,255,255,0.05);
            border-left: 4px solid #ff0000;
            padding: 2rem;
            margin: 2rem 0;
            font-size: 1.2rem;
        }

        .diagnostic {
            margin: 4rem 0;
        }

        .diagnostic-intro {
            text-align: center;
            margin-bottom: 3rem;
        }

        .diagnostic-intro h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .signal-card {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.1);
            margin-bottom: 2rem;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }

        .signal-card:hover {
            border-color: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }

        .signal-card.active {
            border-color: #ff0000;
            background: rgba(255,0,0,0.05);
        }

        .signal-header {
            padding: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .signal-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            font-size: 1.5rem;
            font-weight: 900;
            margin-right: 1rem;
        }

        .signal-content {
            flex: 1;
        }

        .signal-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .signal-symptom {
            color: #999;
            font-style: italic;
        }

        .signal-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .yes-no-buttons {
            display: flex;
            gap: 1rem;
        }

        .btn-yes, .btn-no {
            padding: 0.5rem 1.5rem;
            border: 2px solid transparent;
            background: rgba(255,255,255,0.1);
            color: #fff;
            cursor: pointer;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .btn-yes:hover {
            border-color: #ff0000;
            background: rgba(255,0,0,0.1);
        }

        .btn-no:hover {
            border-color: #00ff00;
            background: rgba(0,255,0,0.1);
        }

        .btn-yes.selected {
            background: #ff0000;
            border-color: #ff0000;
        }

        .btn-no.selected {
            background: #00ff00;
            border-color: #00ff00;
            color: #000;
        }

        .signal-details {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease;
            padding: 0 1.5rem;
        }

        .signal-details.show {
            max-height: 500px;
            padding: 0 1.5rem 1.5rem;
        }

        .immediate-action {
            background: rgba(255,255,255,0.05);
            border-left: 4px solid #ff0000;
            padding: 1rem;
            margin: 1rem 0;
        }

        .action-title {
            font-weight: 700;
            color: #ff0000;
            margin-bottom: 0.5rem;
        }

        .results-section {
            margin: 4rem 0;
            text-align: center;
            display: none;
        }

        .results-section.show {
            display: block;
        }

        .drift-score {
            font-size: 4rem;
            font-weight: 900;
            margin: 2rem 0;
        }

        .score-low { color: #00ff00; }
        .score-medium { color: #ffff00; }
        .score-high { color: #ff0000; }

        .weapon-recommendation {
            background: rgba(255,255,255,0.05);
            padding: 2rem;
            margin: 2rem 0;
            border: 2px solid #ff0000;
        }

        .weapon-card {
            text-align: center;
            padding: 2rem;
        }

        .weapon-card h4 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #ff0000;
        }

        .weapon-button {
            display: inline-block;
            background: #ff0000;
            color: #fff;
            padding: 1rem 2rem;
            margin-top: 1rem;
            text-decoration: none;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .weapon-button:hover {
            transform: scale(1.05);
            background: #cc0000;
        }

        .personalized-plan {
            background: rgba(255,255,255,0.05);
            padding: 2rem;
            margin: 2rem 0;
            text-align: left;
        }

        .plan-item {
            margin: 1rem 0;
            padding-left: 2rem;
            position: relative;
        }

        .plan-item::before {
            content: "→";
            position: absolute;
            left: 0;
            font-weight: 900;
            color: #ff0000;
        }

        .cta-final {
            background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            padding: 3rem;
            margin: 3rem 0;
            text-align: center;
            border-radius: 10px;
        }

        .cta-final h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: #fff;
            color: #000;
            padding: 1rem 2rem;
            font-weight: 900;
            text-decoration: none;
            transition: all 0.3s ease;
            text-transform: uppercase;
        }

        .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(255,255,255,0.1);
        }

        .btn-secondary {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
            padding: 1rem 2rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background: #fff;
            color: #000;
        }

        .live-chat {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #ff0000;
            color: #fff;
            padding: 1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 999;
        }

        .live-chat:hover {
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .cta-buttons {
                flex-direction: column;
            }
            
            .yes-no-buttons {
                flex-direction: column;
            }
        }
      `}</style>
    </>
  );
};

export default DiagnosticPage;