$('.hum_menu').on('click', () => {
    $('header').toggleClass('on');
})

$(window).on('resize', () => {
    $('header').removeClass('on');
});

//各タイトルが表示されたらやってほしい内容を関数に書く
const bnr_func = (entries) => {
    //対象（.bnr_title）が画面の中にあったら、
    //.onを付与する
    for (entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("on");
        }
    }
};

const bnr_ob_param = {
    rootMargin: "-100px",
};

//オブザーバーをインスタンス化
const bnr_ob = new IntersectionObserver(bnr_func, bnr_ob_param);

//.img_wrapを観察対象にする(今回は複数対象)
const bnr_title_arr = document.querySelectorAll(".bnr_title");
for (bnr_title of bnr_title_arr) {
    bnr_ob.observe(bnr_title);
}

