export default function ItemModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black-500/50" onClick={setOpen(!open)}>
      <div></div>
    </div>
  );
}
