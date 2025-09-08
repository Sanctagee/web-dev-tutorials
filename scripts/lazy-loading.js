// Simple lazy loading simulation for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            
            images.forEach(img => {
                // Simulate lazy loading by adding a slight delay
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transition = 'opacity 0.5s';
                }, 300);
            });
            
            // Add animation to metrics on scroll
            const metrics = document.querySelectorAll('.metric');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }
                });
            }, { threshold: 0.1 });
            
            metrics.forEach(metric => {
                metric.style.transform = 'translateY(20px)';
                metric.style.opacity = '0.7';
                metric.style.transition = 'transform 0.5s, opacity 0.5s';
                observer.observe(metric);
            });
        });