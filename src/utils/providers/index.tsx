import { NextUIProvider } from "@nextui-org/react";
import type React from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "../theme";

/**
 * The root provider for the application.
 * It wraps the NextUIProvider and ThemeProvider components.
 * It also includes the Toaster component for displaying toast messages.
 * @param children - The children of the provider.
 * @returns JSX.Element
 */
function LandingUIProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<NextUIProvider>
					<div className={"border-content4 dark:border-content2"}>
						{children}
					</div>
					<Toaster closeButton={true} richColors={true} />
				</NextUIProvider>
			</ThemeProvider>
		</>
	);
}

export default LandingUIProvider;
