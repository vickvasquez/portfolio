
interface Props {
  condition: boolean;
  children: React.ReactNode
}

function RenderCondition({ condition, children }: Props) {
  if (!condition) {
    return null
  }

  return (
    <>{children}</>
  )
}

export default RenderCondition