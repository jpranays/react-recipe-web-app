function useInterSectionObserver(target) {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, _index) => {
			let image = entry.target;
			let src = image.getAttribute("data-src");
			if (entry.isIntersecting) {
				entry.target.closest(".img-wrapper").classList.add("loading");
				image.src = src;
				image.addEventListener("load", () => {
					entry.target.closest(".img-wrapper").classList.remove("loading");
					image.classList.add("loaded");
				});
				//on error remove loading class and add error class
				image.addEventListener("error", () => {
					entry.target.closest(".img-wrapper").classList.remove("loading");
					entry.target.closest(".img-wrapper").classList.add("error");
				});
				observer.unobserve(image);
			}
		});
	});
	observer.observe(target);
}
export default useInterSectionObserver;
