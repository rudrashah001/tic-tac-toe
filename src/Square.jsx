export default function Square({
  value,
  onClick,
  isWinningSquare,
  isDisabled,
}) {
  let bgStyle =
    "bg-gradient-to-br from-slate-100 to-slate-300 hover:from-slate-200 hover:to-slate-400";

  if (isWinningSquare) {
    bgStyle =
      "bg-gradient-to-br from-orange-400 to-yellow-400 shadow-lg scale-105";
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${bgStyle}
        w-24 h-24
        rounded-xl
        text-4xl font-extrabold
        text-slate-800
        border border-slate-400
        shadow-md
        transition-all duration-200
        flex items-center justify-center
        disabled:opacity-70
      `}
    >
      {value}
    </button>
  );
}
