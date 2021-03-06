import { ILink } from "../models/i-link-model";

export const HeaderConfig: { menu: ILink[] } = {
  menu: [
    {
      name: 'Các dòng xe',
      url: '/car',
      icon: 'fa fa-car',
      subMenu: [
        // {
        //   name: 'Tất cả các dòng xe',
        //   url: '/all',
        // },
        {
          name: 'Xe SUV',
          url: '/suv',
        },
        {
          name: 'Xe coupe',
          url: '/coupe',
        },
        {
          name: 'Xe Hatchback',
          url: '/hatchback',
        },
        {
          name: 'Xe sedan',
          url: '/sedan',
        },
        // {
        //   name: 'Xe Wagon/xe bán tải',
        //   url: '/wagon',
        // },
        // {
        //   name: 'Coupé',
        //   url: '/coupe',
        // },
        // {
        //   name: 'Xe Cabriolet & xe Roadster',
        //   url: '/cabriolet',
        // },
        // {
        //   name: 'Xe đa dụng',
        //   url: '/common',
        // },
        // {
        //   name: 'Các dòng xe mới',
        //   url: '/new',
        // }
      ],
      // subMenu2: [
      //   {
      //     name: 'Chọn cấu hình xe',
      //     url: '/config',
      //     icon: 'fa fa-cogs'
      //   },
      //   {
      //     name: 'Tìm xe có sẵn tại đại lý',
      //     url: '/available',
      //     icon: 'fa fa-shopping-cart'
      //   },
      //   {
      //     name: 'Đăng ký lái thử xe',
      //     url: '/trial',
      //     icon: 'fa fa-car-side'
      //   }
      // ]
    },
    {
      name: 'Mua trực tuyến',
      url: '/buy-online',
      subMenu: [
        {
          name: 'Danh sách sản phẩm',
          url: '/list-product',
        },
        // {
        //   name: 'Xe đã qua sử dụng',
        //   url: '/used'
        // },
        // {
        //   name: 'Phụ kiện chính hãng',
        //   url: '/accessories'
        // },
        // {
        //   name: 'Bộ sưu tập',
        //   url: '/collection'
        // }
      ]
    },
    {
      name: 'Tư vấn mua xe',
      url: '/advisory',
      subMenu: [
        {
          name: 'Ưu đãi hiện có',
          url: '/offers'
        },
        {
          name: 'Danh sách đại lý',
          url: '/dealers'
        },
        {
          name: 'Bảng giá & brochure',
          url: '/brochure'
        }
      ]
    },
    {
      name: 'Dịch vụ',
      url: '/services',
      subMenu: [
        {
          name: 'Ưu đãi đặc biệt',
          url: '/special-offer'
        },
        {
          name: 'Dịch vụ & Bảo dưỡng',
          url: '/maintenance'
        },
        {
          name: 'Bảo hành & Bảo hiểm',
          url: '/warranty-and-insurance'
        },
      ]
    }
  ]
}
