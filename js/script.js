/* =========================================================
   VIJAYA ODISHA
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       01. MOBILE MENU
    ====================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mobileNavigation =
        document.getElementById("mobileNavigation");

    if (menuToggle && mobileNavigation) {

        menuToggle.addEventListener("click", function () {

            mobileNavigation.classList.toggle("show");

        });


        /* Close mobile menu after clicking a link */

        const mobileLinks =
            mobileNavigation.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileNavigation.classList.remove("show");

            });

        });

    }



    /* =====================================================
       02. PHOTO GALLERY / LIGHTBOX
    ====================================================== */

    const galleryCards =
        document.querySelectorAll(".gallery-card");

    const lightbox =
        document.querySelector(".lightbox");

    const lightboxImage =
        document.querySelector(".lightbox-content img");

    const lightboxCaption =
        document.querySelector(".lightbox-caption");

    const closeButton =
        document.querySelector(".lightbox-close");

    const prevButton =
        document.querySelector(".lightbox-prev");

    const nextButton =
        document.querySelector(".lightbox-next");


    /*
       Only run gallery JavaScript if the gallery
       elements actually exist on the current page.
    */

    if (
        galleryCards.length > 0 &&
        lightbox &&
        lightboxImage
    ) {

        let currentIndex = 0;


        /* =================================================
           OPEN LIGHTBOX
        ================================================== */

        function openLightbox(index) {

            const card = galleryCards[index];

            if (!card) {
                return;
            }

            const image =
                card.querySelector("img");

            if (!image) {
                return;
            }

            currentIndex = index;


            /* Set main image */

            lightboxImage.src = image.src;

            lightboxImage.alt =
                image.alt || "Vijaya Odisha";


            /* =============================================
               SET CAPTION
            ============================================== */

            if (lightboxCaption) {

                const small =
                    card.querySelector(
                        ".gallery-overlay small"
                    );

                const title =
                    card.querySelector(
                        ".gallery-overlay span"
                    );

                const captionSmall =
                    lightboxCaption.querySelector(
                        "span:first-child"
                    );

                const captionTitle =
                    lightboxCaption.querySelector(
                        "span:last-child"
                    );


                if (captionSmall && small) {

                    captionSmall.textContent =
                        small.textContent;

                }


                if (captionTitle && title) {

                    captionTitle.textContent =
                        title.textContent;

                }

            }


            /* Show lightbox */

            lightbox.classList.add("active");

            /* Prevent page scrolling */

            document.body.style.overflow = "hidden";

        }



        /* =================================================
           CLOSE LIGHTBOX
        ================================================== */

        function closeLightbox() {

            lightbox.classList.remove("active");

            /* Restore page scrolling */

            document.body.style.overflow = "";

        }



        /* =================================================
           PREVIOUS IMAGE
        ================================================== */

        function showPrevious() {

            currentIndex--;

            if (currentIndex < 0) {

                currentIndex =
                    galleryCards.length - 1;

            }

            openLightbox(currentIndex);

        }



        /* =================================================
           NEXT IMAGE
        ================================================== */

        function showNext() {

            currentIndex++;

            if (
                currentIndex >=
                galleryCards.length
            ) {

                currentIndex = 0;

            }

            openLightbox(currentIndex);

        }



        /* =================================================
           CLICK GALLERY CARD
        ================================================== */

        galleryCards.forEach(function (card, index) {

            card.addEventListener(
                "click",
                function () {

                    openLightbox(index);

                }
            );

        });



        /* =================================================
           CLOSE BUTTON
        ================================================== */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function () {

                    closeLightbox();

                }
            );

        }



        /* =================================================
           PREVIOUS BUTTON
        ================================================== */

        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function () {

                    showPrevious();

                }
            );

        }



        /* =================================================
           NEXT BUTTON
        ================================================== */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    showNext();

                }
            );

        }



        /* =================================================
           CLICK OUTSIDE IMAGE TO CLOSE
        ================================================== */

        lightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === lightbox) {

                    closeLightbox();

                }

            }
        );



        /* =================================================
           KEYBOARD CONTROLS
        ================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                /*
                   Do nothing if lightbox is not open
                */

                if (
                    !lightbox.classList.contains(
                        "active"
                    )
                ) {

                    return;

                }


                /* ESC = Close */

                if (event.key === "Escape") {

                    closeLightbox();

                }


                /* LEFT ARROW = Previous */

                if (event.key === "ArrowLeft") {

                    showPrevious();

                }


                /* RIGHT ARROW = Next */

                if (event.key === "ArrowRight") {

                    showNext();

                }

            }
        );

    }



    /* =====================================================
       03. CONTACT FORM
       FRONTEND ONLY
    ====================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                /*
                   Prevent actual form submission
                   because there is no backend yet.
                */

                event.preventDefault();


                alert(
                    "Thank you for contacting VIJAYA!\n\n" +
                    "Your message has been received on " +
                    "this demo website.\n\n" +
                    "Email/backend functionality will be " +
                    "connected later."
                );


                /* Clear form */

                contactForm.reset();

            }
        );

    }



    /* =====================================================
       04. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ====================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !menuToggle ||
                !mobileNavigation
            ) {

                return;

            }


            /*
               If the menu is open and the user clicks
               somewhere outside the menu/button,
               close the menu.
            */

            if (
                mobileNavigation.classList.contains("show") &&
                !mobileNavigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mobileNavigation.classList.remove("show");

            }

        }
    );



    /* =====================================================
       05. ESCAPE KEY FOR MOBILE MENU
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (
                    mobileNavigation &&
                    mobileNavigation.classList.contains("show")
                ) {

                    mobileNavigation.classList.remove(
                        "show"
                    );

                }

            }

        }
    );

});