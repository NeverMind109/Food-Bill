$(function () {
  $(".reviews__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<button class="reviews__slider-buttons reviews__slider-next"><svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="reviews__slider-arrow" d="M17.5 10.0158C17.3684 10.0166 17.2379 9.99133 17.1161 9.94157C16.9943 9.89181 16.8834 9.81848 16.79 9.7258C16.6963 9.63283 16.6219 9.52223 16.5711 9.40038C16.5203 9.27852 16.4942 9.14781 16.4942 9.0158C16.4942 8.88379 16.5203 8.75308 16.5711 8.63122C16.6219 8.50936 16.6963 8.39876 16.79 8.3058L20.1 5.0158L16.92 1.7058C16.7337 1.51844 16.6292 1.26498 16.6292 1.0008C16.6292 0.736612 16.7337 0.483161 16.92 0.295798C17.013 0.20207 17.1236 0.127675 17.2454 0.0769067C17.3673 0.026138 17.498 0 17.63 0C17.762 0 17.8927 0.026138 18.0146 0.0769067C18.1364 0.127675 18.247 0.20207 18.34 0.295798L22.2 4.2958C22.3832 4.48273 22.4859 4.73404 22.4859 4.9958C22.4859 5.25755 22.3832 5.50887 22.2 5.6958L18.2 9.6958C18.1102 9.79273 18.0022 9.87092 17.882 9.92584C17.7619 9.98077 17.632 10.0113 17.5 10.0158V10.0158Z" fill="#F16214"/><line class="reviews__slider-line" x1="20" y1="5.01562" x2="1" y2="5.01562" stroke="#F16214" stroke-width="2" stroke-linecap="round"/></svg></button>',
    prevArrow:
      '<button class="reviews__slider-buttons reviews__slider-prev"><svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="reviews__slider-arrow" d="M17.5 10.0158C17.3684 10.0166 17.2379 9.99133 17.1161 9.94157C16.9943 9.89181 16.8834 9.81848 16.79 9.7258C16.6963 9.63283 16.6219 9.52223 16.5711 9.40038C16.5203 9.27852 16.4942 9.14781 16.4942 9.0158C16.4942 8.88379 16.5203 8.75308 16.5711 8.63122C16.6219 8.50936 16.6963 8.39876 16.79 8.3058L20.1 5.0158L16.92 1.7058C16.7337 1.51844 16.6292 1.26498 16.6292 1.0008C16.6292 0.736612 16.7337 0.483161 16.92 0.295798C17.013 0.20207 17.1236 0.127675 17.2454 0.0769067C17.3673 0.026138 17.498 0 17.63 0C17.762 0 17.8927 0.026138 18.0146 0.0769067C18.1364 0.127675 18.247 0.20207 18.34 0.295798L22.2 4.2958C22.3832 4.48273 22.4859 4.73404 22.4859 4.9958C22.4859 5.25755 22.3832 5.50887 22.2 5.6958L18.2 9.6958C18.1102 9.79273 18.0022 9.87092 17.882 9.92584C17.7619 9.98077 17.632 10.0113 17.5 10.0158V10.0158Z" fill="#F16214"/><line class="reviews__slider-line" x1="20" y1="5.01562" x2="1" y2="5.01562" stroke="#F16214" stroke-width="2" stroke-linecap="round"/></svg></button>',
  });

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 60,
        },
        800
      );
  });

  $(".newsletter__email").each(function () {
    $(this).validate({
      errorClass: "newsletter-invalid",
      messages: {
        email: {
          email: "Enter an email in the correct format, like name@domain.com",
          minlength: "Your email should be longer than 10 symbols",
          required: "Please enter your email",
        },
      },
    });
  });
  $(".footer__division-email").each(function () {
    $(this).validate({
      errorClass: "footer-invalid",
      messages: {
        email: {
          email: "Enter an email in the correct format, like name@domain.com",
          minlength: "Your email should be longer than 10 symbols",
          required: "Please enter your email",
        },
      },
    });
  });

  $(".menu-mobile").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $(".menu__item-link").on("click", function () {
      $(".menu").removeClass("menu--active");
    });
  });
});
