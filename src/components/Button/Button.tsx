import classNames from "classnames"
import "./Button.sass"

interface Props {
  type?: "button" | "submit" | "reset"
  children: React.ReactNode
  isDisabled?: boolean
  isSecondary?: boolean
  onClick?: () => void
}

const Button = ({
  type = "button",
  children,
  isDisabled,
  isSecondary,
  onClick,
}: Props) => (
  <button
    className={classNames({
      btn: true,
      "btn--secondary": isSecondary,
    })}
    type={type}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
