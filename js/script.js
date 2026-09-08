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

/* =========================================================
   GALLERY LIGHTBOX
   Click image → open
   ESC → close
   Click outside → close
   Arrow keys → previous / next
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const galleryCards = document.querySelectorAll(".gallery-card");
    const lightbox = document.querySelector(".lightbox");

    if (!galleryCards.length || !lightbox) {
        return;
    }

    const lightboxImage = lightbox.querySelector(
        ".lightbox-content img"
    );

    const closeButton = lightbox.querySelector(
        ".lightbox-close"
    );

    const previousButton = lightbox.querySelector(
        ".lightbox-prev"
    );

    const nextButton = lightbox.querySelector(
        ".lightbox-next"
    );

    const caption = lightbox.querySelector(
        ".lightbox-caption"
    );


    let currentIndex = 0;


    /* =====================================================
       COLLECT GALLERY IMAGES
    ===================================================== */

    const images = [];

    galleryCards.forEach(function (card, index) {

        const image = card.querySelector("img");

        if (!image) {
            return;
        }

        images.push({
            src: image.src,
            alt: image.alt || "Vijaya Odisha Gallery Image",
            card: card
        });


        /* Make entire card clickable */

        card.addEventListener("click", function (event) {

            event.preventDefault();

            currentIndex = index;

            openLightbox(currentIndex);

        });

    });



    /* =====================================================
       OPEN LIGHTBOX
    ===================================================== */

    function openLightbox(index) {

        if (!images[index]) {
            return;
        }

        currentIndex = index;

        const imageData = images[currentIndex];


        /* Change large image */

        lightboxImage.src = imageData.src;

        lightboxImage.alt = imageData.alt;


        /* Caption */

        if (caption) {

            const smallText = caption.querySelector(
                "span:first-child"
            );

            const mainText = caption.querySelector(
                "span:last-child"
            );

            if (smallText) {
                smallText.textContent =
                    "VIJAYA ODISHA";
            }

            if (mainText) {
                mainText.textContent =
                    imageData.alt;
            }
        }


        /* Show lightbox */

        lightbox.classList.add("show");


        /* Prevent page scrolling */

        document.body.style.overflow = "hidden";


        /* Accessibility */

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

    }



    /* =====================================================
       CLOSE LIGHTBOX
    ===================================================== */

    function closeLightbox() {

        lightbox.classList.remove("show");


        document.body.style.overflow = "";


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
         * Remove image after closing.
         * This prevents old images from flashing
         * when another image is opened.
         */

        setTimeout(function () {

            if (!lightbox.classList.contains("show")) {

                lightboxImage.removeAttribute("src");

            }

        }, 300);

    }



    /* =====================================================
       NEXT IMAGE
    ===================================================== */

    function showNext() {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        updateLightboxImage();

    }



    /* =====================================================
       PREVIOUS IMAGE
    ===================================================== */

    function showPrevious() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        updateLightboxImage();

    }



    /* =====================================================
       UPDATE IMAGE
    ===================================================== */

    function updateLightboxImage() {

        const imageData = images[currentIndex];

        if (!imageData) {
            return;
        }


        lightboxImage.style.opacity = "0";


        setTimeout(function () {

            lightboxImage.src = imageData.src;

            lightboxImage.alt = imageData.alt;

            lightboxImage.onload = function () {

                lightboxImage.style.opacity = "1";

            };


            if (caption) {

                const smallText = caption.querySelector(
                    "span:first-child"
                );

                const mainText = caption.querySelector(
                    "span:last-child"
                );

                if (smallText) {
                    smallText.textContent =
                        "VIJAYA ODISHA";
                }

                if (mainText) {
                    mainText.textContent =
                        imageData.alt;
                }

            }

        }, 120);

    }



    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                closeLightbox();

            }
        );

    }



    /* =====================================================
       NEXT BUTTON
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                showNext();

            }
        );

    }



    /* =====================================================
       PREVIOUS BUTTON
    ===================================================== */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                showPrevious();

            }
        );

    }



    /* =====================================================
       CLICK OUTSIDE IMAGE → CLOSE
    ===================================================== */

    lightbox.addEventListener(
        "click",
        function (event) {

            /*
             * Only close if the user clicked
             * the dark background itself.
             */

            if (event.target === lightbox) {

                closeLightbox();

            }

        }
    );



    /* =====================================================
       PREVENT IMAGE CLICK FROM CLOSING
    ===================================================== */

    if (lightboxImage) {

        lightboxImage.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    }



    /* =====================================================
       ESC + ARROW KEYS
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            /*
             * Do nothing when lightbox isn't open.
             */

            if (!lightbox.classList.contains("show")) {
                return;
            }


            /* ESC */

            if (event.key === "Escape") {

                event.preventDefault();

                closeLightbox();

                return;

            }


            /* RIGHT ARROW */

            if (event.key === "ArrowRight") {

                event.preventDefault();

                showNext();

                return;

            }


            /* LEFT ARROW */

            if (event.key === "ArrowLeft") {

                event.preventDefault();

                showPrevious();

            }

        }
    );

});

/* =========================================
   TOP BAR PAGE-SPECIFIC LINKS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const topbarRight =
        document.querySelector(".topbar-right");

    if (!topbarRight) {
        return;
    }


    /* Remove Contact from top bar on ALL pages */

    topbarRight
        .querySelectorAll('a[href="contact.html"]')
        .forEach(function (link) {
            link.remove();
        });


    /* Remove Login from top bar on ALL pages
       EXCEPT Home */

    if (currentPage !== "index.html") {

        topbarRight
            .querySelectorAll('a[href="login.html"], a[href="login"]')
            .forEach(function (link) {
                link.remove();
            });

    }

});