import {useState} from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isopen,Setisopen] = useState(false);
  const handleClick = () => {
    Setisopen(prevIsOpen => !prevIsOpen);
    
  };

  return (
    <div className="overflow-hidden w-screen main lg:p-8 lg:px-36 bg-[#F8F7F1] lg:flex lg:flex-col">
      <div className="flex justify-between items-center p-3">
        <div className="w-32 min-w-32 lg:w-40">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 166 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.52 39.48C10.28 39.48 8.13333 39.1867 6.08 38.6C4.02667 37.9867 2.37333 37.2 1.12 36.24L3.32 31.36C4.52 32.2133 5.93333 32.92 7.56 33.48C9.21333 34.0133 10.88 34.28 12.56 34.28C13.84 34.28 14.8667 34.16 15.64 33.92C16.44 33.6533 17.0267 33.2933 17.4 32.84C17.7733 32.3867 17.96 31.8667 17.96 31.28C17.96 30.5333 17.6667 29.9467 17.08 29.52C16.4933 29.0667 15.72 28.7067 14.76 28.44C13.8 28.1467 12.7333 27.88 11.56 27.64C10.4133 27.3733 9.25333 27.0533 8.08 26.68C6.93333 26.3067 5.88 25.8267 4.92 25.24C3.96 24.6533 3.17333 23.88 2.56 22.92C1.97333 21.96 1.68 20.7333 1.68 19.24C1.68 17.64 2.10667 16.1867 2.96 14.88C3.84 13.5467 5.14667 12.4933 6.88 11.72C8.64 10.92 10.84 10.52 13.48 10.52C15.24 10.52 16.9733 10.7333 18.68 11.16C20.3867 11.56 21.8933 12.1733 23.2 13L21.2 17.92C19.8933 17.1733 18.5867 16.6267 17.28 16.28C15.9733 15.9067 14.6933 15.72 13.44 15.72C12.1867 15.72 11.16 15.8667 10.36 16.16C9.56 16.4533 8.98667 16.84 8.64 17.32C8.29333 17.7733 8.12 18.3067 8.12 18.92C8.12 19.64 8.41333 20.2267 9 20.68C9.58667 21.1067 10.36 21.4533 11.32 21.72C12.28 21.9867 13.3333 22.2533 14.48 22.52C15.6533 22.7867 16.8133 23.0933 17.96 23.44C19.1333 23.7867 20.2 24.2533 21.16 24.84C22.12 25.4267 22.8933 26.2 23.48 27.16C24.0933 28.12 24.4 29.3333 24.4 30.8C24.4 32.3733 23.96 33.8133 23.08 35.12C22.2 36.4267 20.88 37.48 19.12 38.28C17.3867 39.08 15.1867 39.48 12.52 39.48Z"
              fill="#286F6C"
            />
            <path
              d="M30.0678 39V11H32.5078L45.3078 32.84H44.0278L56.7078 11H59.1478V39H56.3078V15.44H56.9878L45.3078 35.44H43.9078L32.1478 15.44H32.9078V39H30.0678ZM67.6709 39V18H70.5109V39H67.6709ZM69.1109 13.36C68.5243 13.36 68.0309 13.16 67.6309 12.76C67.2309 12.36 67.0309 11.88 67.0309 11.32C67.0309 10.76 67.2309 10.2933 67.6309 9.92C68.0309 9.52 68.5243 9.32 69.1109 9.32C69.6976 9.32 70.1909 9.50666 70.5909 9.88C70.9909 10.2533 71.1909 10.72 71.1909 11.28C71.1909 11.8667 70.9909 12.36 70.5909 12.76C70.2176 13.16 69.7243 13.36 69.1109 13.36ZM84.0531 39.2C82.3198 39.2 80.6798 38.96 79.1331 38.48C77.5865 37.9733 76.3731 37.3467 75.4931 36.6L76.7731 34.36C77.6265 35 78.7198 35.56 80.0531 36.04C81.3865 36.4933 82.7865 36.72 84.2531 36.72C86.2531 36.72 87.6931 36.4133 88.5731 35.8C89.4531 35.16 89.8931 34.32 89.8931 33.28C89.8931 32.5067 89.6398 31.9067 89.1331 31.48C88.6531 31.0267 88.0131 30.6933 87.2131 30.48C86.4131 30.24 85.5198 30.04 84.5331 29.88C83.5465 29.72 82.5598 29.5333 81.5731 29.32C80.6131 29.1067 79.7331 28.8 78.9331 28.4C78.1331 27.9733 77.4798 27.4 76.9731 26.68C76.4931 25.96 76.2531 25 76.2531 23.8C76.2531 22.6533 76.5731 21.6267 77.2131 20.72C77.8531 19.8133 78.7865 19.1067 80.0131 18.6C81.2665 18.0667 82.7865 17.8 84.5731 17.8C85.9331 17.8 87.2931 17.9867 88.6531 18.36C90.0131 18.7067 91.1331 19.1733 92.0131 19.76L90.7731 22.04C89.8398 21.4 88.8398 20.9467 87.7731 20.68C86.7065 20.3867 85.6398 20.24 84.5731 20.24C82.6798 20.24 81.2798 20.5733 80.3731 21.24C79.4931 21.88 79.0531 22.7067 79.0531 23.72C79.0531 24.52 79.2931 25.1467 79.7731 25.6C80.2798 26.0533 80.9331 26.4133 81.7331 26.68C82.5598 26.92 83.4531 27.12 84.4131 27.28C85.3998 27.44 86.3731 27.64 87.3331 27.88C88.3198 28.0933 89.2131 28.4 90.0131 28.8C90.8398 29.1733 91.4931 29.72 91.9731 30.44C92.4798 31.1333 92.7331 32.0533 92.7331 33.2C92.7331 34.4267 92.3865 35.4933 91.6931 36.4C91.0265 37.28 90.0398 37.9733 88.7331 38.48C87.4531 38.96 85.8931 39.2 84.0531 39.2ZM108.664 17.8C110.371 17.8 111.864 18.1333 113.144 18.8C114.451 19.44 115.464 20.4267 116.184 21.76C116.931 23.0933 117.304 24.7733 117.304 26.8V39H114.464V27.08C114.464 24.8667 113.904 23.2 112.784 22.08C111.691 20.9333 110.144 20.36 108.144 20.36C106.651 20.36 105.344 20.6667 104.224 21.28C103.131 21.8667 102.278 22.7333 101.664 23.88C101.078 25 100.784 26.36 100.784 27.96V39H97.9444V9.32H100.784V23.76L100.224 22.68C100.891 21.16 101.958 19.9733 103.424 19.12C104.891 18.24 106.638 17.8 108.664 17.8ZM124.976 39V18H127.696V23.72L127.416 22.72C128.002 21.12 128.989 19.9067 130.376 19.08C131.762 18.2267 133.482 17.8 135.536 17.8V20.56C135.429 20.56 135.322 20.56 135.216 20.56C135.109 20.5333 135.002 20.52 134.896 20.52C132.682 20.52 130.949 21.2 129.696 22.56C128.442 23.8933 127.816 25.8 127.816 28.28V39H124.976ZM152.315 39V34.36L152.195 33.6V25.84C152.195 24.0533 151.689 22.68 150.675 21.72C149.689 20.76 148.209 20.28 146.235 20.28C144.875 20.28 143.582 20.5067 142.355 20.96C141.129 21.4133 140.089 22.0133 139.235 22.76L137.955 20.64C139.022 19.7333 140.302 19.04 141.795 18.56C143.289 18.0533 144.862 17.8 146.515 17.8C149.235 17.8 151.329 18.48 152.795 19.84C154.289 21.1733 155.035 23.2133 155.035 25.96V39H152.315ZM145.075 39.2C143.502 39.2 142.129 38.9467 140.955 38.44C139.809 37.9067 138.929 37.1867 138.315 36.28C137.702 35.3467 137.395 34.28 137.395 33.08C137.395 31.9867 137.649 31 138.155 30.12C138.689 29.2133 139.542 28.4933 140.715 27.96C141.915 27.4 143.515 27.12 145.515 27.12H152.755V29.24H145.595C143.569 29.24 142.155 29.6 141.355 30.32C140.582 31.04 140.195 31.9333 140.195 33C140.195 34.2 140.662 35.16 141.595 35.88C142.529 36.6 143.835 36.96 145.515 36.96C147.115 36.96 148.489 36.6 149.635 35.88C150.809 35.1333 151.662 34.0667 152.195 32.68L152.835 34.64C152.302 36.0267 151.369 37.1333 150.035 37.96C148.729 38.7867 147.075 39.2 145.075 39.2ZM163.029 39.2C162.442 39.2 161.936 38.9867 161.509 38.56C161.109 38.1333 160.909 37.6133 160.909 37C160.909 36.36 161.109 35.84 161.509 35.44C161.936 35.04 162.442 34.84 163.029 34.84C163.616 34.84 164.109 35.04 164.509 35.44C164.936 35.84 165.149 36.36 165.149 37C165.149 37.6133 164.936 38.1333 164.509 38.56C164.109 38.9867 163.616 39.2 163.029 39.2Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>
        <div className="relative flex items-center gap-20">
          <nav className={`absolute top-10 -right-3 p-2 pl-6 w-screen text-center list-none gap-32 text-xl bg-[#F8F7F1] transition-all duration-300 ease-in-out ${
          isopen ? 'h-auto' : 'h-0 overflow-hidden'
        } lg:relative lg:w-auto lg:top-auto lg:right-auto lg:flex lg:h-auto lg:overflow-visible z-50`}>
            <li className="my-3 lg:my-0">
              <Link to="/">Home</Link>
            </li>
            <li className="my-3 lg:my-0">
              <Link to="/">Service</Link>
            </li>
            <li className="my-3 lg:my-0">
              <Link to="/">Projects</Link>
            </li>
            <li className="my-3 lg:my-0">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="my-3 lg:my-0 lg:hidden">
            <button className="bg-[#286F6C] text-sm p-3 px-7 text-[#F8F7F1] rounded-md ">
            Download CV
          </button>
            </li>
          </nav>
          <button className="bg-[#286F6C] p-3 px-7 text-[#F8F7F1] rounded-md hidden lg:block">
            Download CV
          </button>
          <div className="lg:hidden text-5xl" onClick={handleClick}>
          <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;