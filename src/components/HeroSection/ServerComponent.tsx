import Image from "next/image";

export const heading1 = (
  <>
    <h1 className="font-heading mb-6 capitalize">
      khám phá khách sạn tuyệt đẹp của chúng tôi
    </h1>

    <p className="text-[#4a4a4a] dark:text-[#fff] mb-12 max-w-lg">
      Trải nghiệm một khách sạn tinh tế đắm chìm trong lịch sử phong phú và sự
      thanh lịch vượt thời gian.
    </p>

    <button className="btn-primary">Bắt đầu</button>
  </>
);

export const section2 = (
  <div className="md:grid hidden gap-8 grid-cols-1">
    <div className="rounded-2xl overflow-hidden h-48">
      <Image
        src="/images/hero-1.jpeg"
        alt="hero-1"
        width={300}
        height={300}
        className="img scale-animation"
      />
    </div>

    <div className="grid grid-cols-2 gap-8 h-48">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/hero-2.jpeg"
          alt="hero-2"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/hero-3.jpeg"
          alt="hero-3"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
    </div>
  </div>
);
