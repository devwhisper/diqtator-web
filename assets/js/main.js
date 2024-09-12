$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    items: 3,
    autoWidth: true,
  });

  function updateButtonState() {
    const allInputsHaveContent = $(".form-input")
      .toArray()
      .every((input) => input.value.length > 0);

    if (allInputsHaveContent) {
      $(".btn").removeClass("disabled");
    } else {
      $(".btn").addClass("disabled");
    }
  }

  $(".form-input").on("input", function () {
    $(this).toggleClass("has-content", this.value.length > 0);
    updateButtonState();
  });

  $(".btn").on("click", function () {
    $(".form-input").val("").removeClass("has-content");
    updateButtonState();
  });

  const $sections = $("section");
  const $navLi = $("nav .container ul li");

  $(window).on("scroll", function () {
    let current = "";

    $sections.each(function () {
      const $section = $(this);
      const sectionTop = $section.offset().top;
      if ($(window).scrollTop() >= sectionTop - 60) {
        current = $section.attr("id");
      }
    });

    $navLi.removeClass("active");
    $navLi.each(function () {
      const $li = $(this);
      if ($li.hasClass(current)) {
        $li.addClass("active");
      }
    });
  });
});
