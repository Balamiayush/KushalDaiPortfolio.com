const cld = (path: string) =>
  `https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_1200/${path}`;

export const workData = [
  {
    id: 1,
    title: "Cr8rs",
    description:
      "Cr8rs is a creator-focused platform that helps streamers and digital creators monetize their content and connect with their audience.",
    src: cld("v1767983982/Frame_1171275272_2_xf2kyo.png"),
    target: true,
  },
  {
    id: 2,
    title: "AfrikaPro",
    description:
      "AfrikaPro is a premium membership program for AfrikaPro members, offering exclusive access to premium content, tools, and resources.",
    src: cld("v1767983981/Frame_1171275272_1_czpxsm.png"),
    target: false,
  },
  {
    id: 3,
    title: "Market 33",
    description:
      "Market 33 is a premium membership program for AfrikaPro members, offering exclusive access to premium content, tools, and resources.",
    src: cld("v1767983981/Frame_1171275272_spdc10.png"),
    target: false,
  },
];
