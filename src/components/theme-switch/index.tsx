import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../utils/theme";

/**
 * ThemeSwitch component for toggling between light and dark themes instantly.
 * @returns JSX.Element
 */
export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Button variant="light" size={"sm"} isIconOnly={true} onPress={toggleTheme}>
			{theme === "dark" ? (
				<Sun className="h-4 w-4" />
			) : (
				<Moon className="h-4 w-4" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
