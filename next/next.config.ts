import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      /*
        서버 액션 본문 상한. 기본값 1MB 라서 위키 이미지가 이 벽에 먼저 막혔다.
        위키가 허용하는 5MB 에 multipart 부대 정보 여유를 더해 잡는다.
        (nginx 의 client_max_body_size 도 같이 맞춰져 있어야 한다)
      */
      bodySizeLimit: "8mb",
    },
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
