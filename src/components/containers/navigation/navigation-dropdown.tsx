import { Link } from "@tanstack/react-router";

type Props = {
    title: string;
    options: { title: string; href: string }[];
};

// TODO: Replace this component later because this looks buggy
function NavigationDropdown({ title, options }: Props) {
    return (
        <li className="dropdown">
            <div tabIndex={0} role="button">
                {title}
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {options.map((option) => (
                    <li key={option.href}>
                        <Link to={option.href}>{option.title}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default NavigationDropdown;
