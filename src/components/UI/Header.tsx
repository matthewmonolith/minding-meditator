export const Header = ({ title, bgColor }: { title: string; bgColor: string }) => (
    <h2 className={`text-4xl font-bold text-white text-center ${bgColor} inline-block py-3 px-5 rounded-full`}>
      {title}
    </h2>
  );