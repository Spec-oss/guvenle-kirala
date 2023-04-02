import logo from "../assets/logo.png";
import dot from "../assets/h6.png";
import huawei from "../assets/huawei.png";
import google from "../assets/google.png";
import ios from "../assets/ios.png";
import background from "../assets/background.png";

export default function MainFooter() {
  return (
    <footer className="bg-neutral-900 text-center text-neutral-100 dark:bg-neutral-100 dark:text-neutral-100 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="">
            <h6 className="mb-2 flex justify-center font-semibold md:justify-start">
              Hakkımızda
            </h6>
            <img alt="dot" src={dot} className="w-32 mb-2 inline-block" />
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Güvenlekirala Nedir?
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Nasıl Kullanılır?
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200">
                Avantajları Nelerdir?
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-2 flex justify-center font-semibold md:justify-start">
              Kariyer
            </h6>
            <img alt="dot" src={dot} className="w-32 mb-2 inline-block" />
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Gayrimenkul Ortağı
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Fotoğrafçı Olmak
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Ödeme ve Hizmetler
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Süreçler ve Sözleşmeler
              </a>
            </p>
            <p>
              <a href="/#" className="text-neutral-200 ">
                Güvenilir Kiracı Nedir?
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-2 flex justify-center font-semibold md:justify-start">
              Evinizi Kiralayın
            </h6>
            <img alt="dot" src={dot} className="w-32 mb-2 inline-block" />
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Evimi Nasıl Kiralarım
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Ödemeler ve Vergilendirme
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Nasıl İyi Ev Sahibi Olunur
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Kullanıcı Yorumları
              </a>
            </p>
            <p>
              <a href="/#" className="text-neutral-200 ">
                Bilgi Merkezi
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-2 flex justify-center font-semibold md:justify-start">
              Yardım ve Destek
            </h6>
            <img alt="dot" src={dot} className="w-32 mb-2 inline-block" />

            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Sıkça Sorulan Sorular
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Bilgi Merkezi
              </a>
            </p>
            <p className="mb-4">
              <a href="/#" className="text-neutral-200 ">
                Destek Hattı
              </a>
            </p>
          </div>
          <div className="">
            <img alt="logo" src={logo} className="w-48" />
            <span className="mt-4 mb-4 flex font-semibold md:justify-start">
              Kiramkolay Bilişim Teknolojileri A.Ş.
            </span>
            <div className="flex mb-4">
              <a href="/#" className="mr-6 text-neutral-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="/#" className="mr-6 text-neutral-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="/#" className="mr-6 text-neutral-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="/#" className="mr-6 text-neutral-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
            <div className="grid-2 grid md:grid-cols-2 gap-2">
              <img alt="huawei" src={huawei} className="w-28" />
              <img alt="google" src={google} className="w-28" />
              <img alt="ios" src={ios} className="w-28" />
            </div>
          </div>
        </div>
      </div>
      <img alt="background" src={background} className="" />
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center">
        <div className="p-6 flex justify-center font-semibold md:justify-start">
          <p>© 2023 Tüm Hakları Saklıdır.</p>
        </div>
        <div className="p-6 flex justify-center font-semibold md:justify-start">
          <a href="/#" className="underline">Gizlilik Politikası</a>
        </div>
        <div className="p-6 flex justify-center font-semibold md:justify-start">
          <a href="/#" className="underline" >Kullanım Şartları</a>
        </div>
        <div className="p-6 flex justify-center font-semibold md:justify-start">
          <p>Versiyon: v1.0.0.0</p>
        </div>
      </div>
    </footer>
  );
}
