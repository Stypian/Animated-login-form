
    const preventSpellCheck = () => {
        document.querySelector(".anilog__input").setAttribute('spellcheck', false);
    }

    preventSpellCheck();
    

    const stopAnimationOnHover = () => {
        const link = document.querySelectorAll(".anilog__sign-up-in--link");
        link.forEach(e => {
            e.addEventListener('mouseover', function() {
                e.style.animationPlayState = 'paused';
            });

            e.addEventListener('mouseout', function() {
                e.style.animationPlayState = 'initial';
            });
        });
    }

    stopAnimationOnHover();

    const signUpSignIn = () => {
        const link = document.querySelectorAll(".anilog__sign-up-in--link");
        const login = document.querySelector(".anilog__inner--login");
        const signup = document.querySelector(".anilog__inner--signup");
        link[0].addEventListener('click', function() {
            login.setAttribute('style', 'transform: scale(0); opacity: 0;');
            signup.setAttribute('style', 'transform: scale(1); opacity: 1; transition-delay: 500ms;');
        });

        link[1].addEventListener('click', function() {
            signup.setAttribute('style', 'transform: scale(0); opacity: 0;');
            login.setAttribute('style', 'transform: scale(1); opacity: 1; transition-delay: 500ms;');
        })
    }

    signUpSignIn();

    const increaseFontSize = () => {
        const input = document.querySelectorAll(".anilog__input");
        input.forEach(i => {
            i.addEventListener('input', function() {
                if (i.value.length > 0) {
                    i.setAttribute('style', 'padding-top: 10px');
                } else {
                    i.setAttribute('style', 'padding-top: 0px');
                }
            });

            i.addEventListener('focus', function() {
                i.setAttribute('style', 'padding-top: 10px');
            });

            i.addEventListener('focusout', function() {
                if (i.value.length < 1) {
                    i.setAttribute('style', 'padding-top: 0px');
                }
            });
        });
    }

    increaseFontSize();

    const submitForm = () => {
            const login = document.querySelector(".anilog__login");
            const signup = document.querySelector(".anilog__signup");
            const form = document.querySelector(".anilog__cont");
            login.addEventListener('click', function(e) {
                form.submit();
            })
            signup.addEventListener('click', function(e) {
                form.submit();
            })
        }
    
        submitForm();





















