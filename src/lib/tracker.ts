export function trackUserActivity(page: string, isLoggedIn: boolean = false) {
  const sessionId =
    sessionStorage.getItem('sessionId') || crypto.randomUUID();
  sessionStorage.setItem('sessionId', sessionId);

  function getScrollPercent() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return Math.round((scrollTop / scrollHeight) * 100);
  }

  function getBrowserDetails() {
    const userAgent = navigator.userAgent;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = /Mobi|Android/i.test(userAgent);

    return {
      browser: userAgent,
      screen:`${width}x${height}`,
      isMobile,
      isLoggedIn
    };
  }

  const data = {
    sessionId,
    page,
    scroll: getScrollPercent(),
    ...getBrowserDetails(),
  };

  fetch('http://localhost:5000/api/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((err) => console.error('Tracking failed', err));
}