// common/routeInterceptor.js
const loginPath = "/pages/login/index"; // 登录页路径
const homePath = "/pages/home/home"; // 首页路径
const blockedPages = []; // 禁止访问的页面

export function routeInterceptor() {
  // 获取当前页面路径（不带参数）
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const currentPath = `/${currentPage.route}`;

  // 判断是否是禁止访问的页面
  if (blockedPages.includes(currentPath)) {
    const token = uni.getStorageSync('token');
    if (token) {
      uni.showToast({
        title: '您已登录，即将跳转到首页',
        icon: 'none'
      });
      setTimeout(() => {
        uni.switchTab({ url: homePath }); // 跳转到首页
      }, 1500);
      return false; // 阻止页面继续加载
    }
  }
  return true; // 允许访问
}