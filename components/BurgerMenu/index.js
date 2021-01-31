import { Burger } from './styled';

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <Burger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  )
}

export default BurgerMenu;