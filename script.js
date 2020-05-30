/**
 * Copyright (c) 2022-2026 Ashraf Morningstar
 * 
 * These are personal recreations of existing projects, developed by Ashraf Morningstar 
 * for learning and skill development. Original project concepts remain the 
 * intellectual property of their respective creators.
 */

// Interactive Elements for Nexus AI Dashboard

document.addEventListener('DOMContentLoaded', () => {
    // Stat Counter Animation
    const stats = document.querySelectorAll('.stat-value');

    stats.forEach(stat => {
        const originalText = stat.innerText;
        if (originalText.includes('%') || originalText.includes('TB') || originalText === 'ACTIVE') return; // Skip complex formats for now, just animate pure numbers if any

        // Simple glitch effect on hover for stats
        stat.parentElement.addEventListener('mouseenter', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                stat.innerText = stat.innerText.split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    })
                    .join('');

                if (iterations >= originalText.length) clearInterval(interval);
                iterations += 1 / 3;
            }, 30);
        });
    });

    // Bar Graph Animation
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        // Randomize height slightly on load for dynamic feel
        const originalHeight = parseFloat(bar.style.getPropertyValue('--h'));

        setInterval(() => {
            const fluctuation = Math.random() * 10 - 5; // +/- 5%
            let newHeight = originalHeight + fluctuation;
            if (newHeight > 100) newHeight = 100;
            if (newHeight < 10) newHeight = 10;
            bar.style.setProperty('--h', `${newHeight}%`);
        }, 2000 + Math.random() * 1000);
    });

    // Button Click Ripple/Glow Effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Add a temporary glow class
            this.style.boxShadow = `0 0 40px var(--primary-neon)`;
            this.style.transform = 'scale(0.95)';

            setTimeout(() => {
                this.style.boxShadow = '';
                this.style.transform = '';
            }, 200);
        });
    });

    // Console Log Easter Egg
    console.log(`
    %c NEXUS AI %c SYSTEM ONLINE 
    `, 'background: #000; color: #00f3ff; font-size: 20px; font-weight: bold; padding: 10px;', 'background: #00f3ff; color: #000; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('Synchronizing neural pathways...');
});
