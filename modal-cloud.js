// One SVG silhouette: circular lobes share the same radius, including the corners.
document.querySelectorAll('.modalBubble').forEach(bubble => {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.classList.add('modalCloudShape');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const path = document.createElementNS(ns, 'path');
  svg.append(path);
  bubble.prepend(svg);

  const redraw = () => {
    const w = bubble.clientWidth;
    const h = bubble.clientHeight;
    if (w < 48 || h < 48) return;
    const r = 12;
    let d = `M ${r} ${r} H ${w-r} V ${h-r} H ${r} Z`;
    const circle = (x, y) => {
      d += ` M ${x-r} ${y} a ${r} ${r} 0 1 1 ${2*r} 0 a ${r} ${r} 0 1 1 ${-2*r} 0 Z`;
    };
    // Shared corner circles avoid overlaps between independently tiled edges.
    const nx = Math.max(1, Math.round((w-2*r) / 21));
    const ny = Math.max(1, Math.round((h-2*r) / 21));
    for (let i = 0; i <= nx; i++) {
      const x = r + (w-2*r) * i / nx;
      circle(x, r);
      circle(x, h-r);
    }
    for (let i = 1; i < ny; i++) {
      const y = r + (h-2*r) * i / ny;
      circle(r, y);
      circle(w-r, y);
    }
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    path.setAttribute('d', d);
  };
  new ResizeObserver(redraw).observe(bubble);
  redraw();
});
