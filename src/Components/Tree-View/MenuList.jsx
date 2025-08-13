import MenuItem from "./MenuItems";

export default function MenuLists({ list }) {
  if (!list || !Array.isArray(list)) return null;
  return (
    <ul className="menu-list-container">
      {list.map((item, index) => (
        <MenuItem key={item.label + index} item={item} />
      ))}
    </ul>
  );
}
