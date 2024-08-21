ScrollTrigger.create({
	start: "top -100",
	end: 99999,
	toggleClass: {
		className: "is-sticky",
		targets: ".navbar",
	},
});

function initializeSplitText() {
	const titles = document.querySelectorAll('h1, h2, .text-size-xlarge, .qoute');
	titles.forEach((title) => {
		const split = new SplitText(title, { type: "lines", linesClass: "split-line" });
		split.lines.forEach((line) => {
			const wrapper = document.createElement('div');
			wrapper.style.overflow = 'hidden';
			line.parentNode.insertBefore(wrapper, line);
			wrapper.appendChild(line);
		});

		const tl = gsap.timeline({
			paused: true
		});

		tl.from(split.lines, {
			duration: 1.5,
			yPercent: 150,
			ease: "power4.out",
			skewY: -3,
			stagger: 0.1,
		});

		ScrollTrigger.create({
			trigger: title,
			start: "top 100%",
			end: "bottom 0%",
			animation: tl,
			toggleActions: "play none play none", //onEnter, onLeave, onEnterBack, onLeaveBack
		});
	});
}

document.addEventListener("DOMContentLoaded", function () {
	initializeSplitText();
});