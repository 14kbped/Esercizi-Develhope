type Color = {
    id: number,
    name: string
};

type ColorsProps = {
    items: Color[];
};

type ColorProps = {
    id: number,
    name: string
};

export function Colors({items} : ColorsProps ) {
    return (
        <ul>
            {items.map ((color) => {
                return (
                    <Color key={color.id} id={color.id} name={color.name} />
                )
            })}
        </ul>
    )
};

export function Color({ name }: ColorProps) {
    return <li>{name}</li>;
}