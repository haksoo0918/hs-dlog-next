import { Logs, Tag, Box, CircleUserRound, CircleDashed, House } from 'lucide-react'

interface Props {
  title: string
}

const NavIcons = ({ title }: Props) => {
  const navIcons = {
    Home: <House />,
    Blog: <Logs />,
    Tags: <Tag />,
    Projects: <Box />,
    About: <CircleUserRound />,
  }

  return navIcons[title] || <CircleDashed />
}

export default NavIcons
