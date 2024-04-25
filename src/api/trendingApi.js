import axiosClient from "./axiosClient";

const trendingApi = {
  getAll(page) {
    const url = `/danh-sach/phim-moi-cap-nhat?page=2`;
    return axiosClient.get(url);
  },
};

export default trendingApi;
