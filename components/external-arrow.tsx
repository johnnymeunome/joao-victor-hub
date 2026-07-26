type ExternalArrowProps = {
  className?: string;
};

export function ExternalArrow({ className }: ExternalArrowProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
