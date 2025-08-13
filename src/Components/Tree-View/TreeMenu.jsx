import MenuLists from "./MenuList";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-contianer">
      <MenuLists list={menus} />
    </div>
  );
}
