const wulkanPro = document.querySelector('.wulkaniePromo');
const wulkanPos = document.querySelector('.wulkaniePosition');
const showP = document.querySelector('.hide');
const banner = document.querySelector('.banner');

banner.addEventListener('mouseover', function () {
    showP.classList.toggle('wulkaniePromo');
})

banner.addEventListener('mouseout', function () {
    showP.classList.toggle('wulkaniePromo');
})