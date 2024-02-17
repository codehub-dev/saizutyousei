const get_logo_width_2 = (): string => {
	if (window.innerWidth >= 1920) return '100px';
	if (
		(window.innerWidth <= 992 && window.innerWidth >= 768) ||
		window.innerWidth <= 375
	)
		return '80px';
	return '30%';
};
