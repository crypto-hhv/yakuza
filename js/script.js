$(function () {
	"use strict";

	// preloader
	$(document).ready(function () {
		// Fakes the loading setting a timeout
		setTimeout(function () {
			$("body").addClass("loaded");
		}, 100);
	});
});
