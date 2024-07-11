//テキストをシャッフルさせる
shuffleLetters(document.querySelector('.name_kana'),{
    step: 10,
});

shuffleLetters(document.querySelector('#name_box'),{
    step: 10,
});

//スクロールに合わせてテキストをシャッフルさせる
const targets = document.querySelectorAll('.sh_text');

if(targets !==null) {
  shuffleShowScroll();
}

function shuffleShowScroll() {
  function doWhenTargetObserve(entries, observerStop) {
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }      
      // 監視範囲と交差したときの処理（シャッフルさせ、is-showクラス付与）
      shuffleLetters(entry.target, {
        step: 10,
        fps: 40,
      });
      entry.target.classList.add('is_show');
      //一度交差したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null,
    rootMargin: '-10% 0%',
    threshold: 1,
  };
  //IntersectionObseverのインスタンス作成
  const observer = new IntersectionObserver(doWhenTargetObserve, options);
  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}