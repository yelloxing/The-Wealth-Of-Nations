import animation from '@hai2007/tool/animation';

export default function (overValue) {

    overValue = overValue || 0;

    let element = document.documentElement;

    let routerString = (window.location.href + "").split('#/')[1];
    let fixed = routerString ? routerString.split('/')[1] : false;
    if (fixed) {

        // 获取滚动调整结点
        let fixedDom = document.getElementById('fixed-' + fixed);
        if (fixedDom) {
            let offsetTop = fixedDom.offsetTop - overValue;
            let currentScrollTop = element.scrollTop || 0;
            animation(deep => {
                element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
            }, 500, () => {
                element.scrollTop = offsetTop;
            });
        }

    } else {
        element.scrollTop = 0;
    }

    document.getElementById('root-view').scrollTop = 0;

};
