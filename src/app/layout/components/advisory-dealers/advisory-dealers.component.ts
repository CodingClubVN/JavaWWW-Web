import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advisory-dealers',
  templateUrl: './advisory-dealers.component.html',
  styleUrls: ['./advisory-dealers.component.scss']
})
export class AdvisoryDealersComponent implements OnInit {

  constructor() { }

  dealers = {
    hoChiMinh: [
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995896/dai-ly-xe-mercedes-vo-van-kiet-1_liobde.jpg",
        name: "MERCEDES-BENZ HAXACO VÕ VĂN KIỆT",
        address: "2008 Đại Lộ Võ Văn Kiệt, Phường An Lạc, Quận Bình Tân, TP. HCM",
        phone: "0901 920 030"
      },
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995896/dai-ly-xe-mercedes-hang-xanh-dien-bien-phu-1_-_Copy_ls308f.jpg",
        name: "MERCEDES-BENZ HAXACO ĐIỆN BIÊN PHỦ (HÀNG XANH)",
        address: "333 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, TP.HCM",
        phone: "0901 920 030"
      },
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995896/da%CC%A3i-ly%CC%81-xe-mercedes-phu%CC%81-my%CC%83-hu%CC%9Bng-qua%CC%A3%CC%82n-7-hcm_xhdhta.jpg",
        name: "MERCEDES-BENZ VIETNAM STAR PHÚ MỸ HƯNG (Quận 7)",
        address: "811 – 813 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM",
        phone: "0901 920 030"
      },
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995896/dai-ly-xe-mercedes-truong-chinh-tan-binh-hcm-3_rdxfgh.jpg",
        name: "MERCEDES-BENZ VIETNAM STAR TRƯỜNG TRINH ",
        address: "02 Trường Chinh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM",
        phone: "0901 920 030"
      }
    ],
    binhDuong: [
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995895/dai-ly-mercedes-viet-nam-star-binh-duong-2_nwwuyb.jpg",
        name: "MERCEDES-BENZ VIET NAM STAR BÌNH DƯƠNG",
        address: "Số 4, The Canary, Đại Lộ Bình Dương, Thuận An, Tỉnh Bình Dương (Kế bên AEON Bình Dương)",
        phone: "0901 920 030"
      }
    ],
    haNoi: [
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995895/dai-ly-mercedes-haxaco-kim-giang-ha-noi-1_ppmgco.jpg",
        name: "MERCEDES-BENZ HAXACO KIM GIANG",
        address: "256 Kim Giang, Phường Đại Kim, Quận Hoàng Mai, Hà Nội",
        phone: "0901 920 030"
      },
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995896/dai-ly-xe-mercedes-haxaco-lang-ha-ha-noi_dfa58s.jpg",
        name: "https://res.cloudinary.com/awi-ln/image/upload/v1651995896/dai-ly-xe-mercedes-haxaco-lang-ha-ha-noi_dfa58s.jpg",
        address: "46 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội",
        phone: "0901 920 030"
      }
    ],
    haLong: [
      {
        image: "https://res.cloudinary.com/awi-ln/image/upload/v1651995895/dai-ly-mercedes-an-du-quang-ninh-1_-_Copy_zwtx4j.jpg",
        name: "MERCEDES-BENZ AN DU QUẢNG NINH",
        address: "Đường Trần Phú, TP. Hạ Long, Tỉnh Quảng Ninh",
        phone: "0901 920 030"
      }
    ]

  }
  ngOnInit(): void {
  }

}
