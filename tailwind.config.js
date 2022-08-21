{
    import("tailwindcss").Config;
}
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            xl: "1200px",
            lg: "992px",
            md: "768px",
            sm: "576px",
        },
        extend: {
            colors: {
                "h-color": "#222223",
                "p-color": "#5F5F64",
                "light-blue": "#52C0FF",
                "dark-blue": "#41B3F4",
                main: '#41B3F4',
            },
            fontSize: {
                "heading-lg": [
                    "60px",
                    {
                        lineHeight: "70px",
                        letterSpacing: "-0.02em",
                    },
                ],
                "heading-xl": [
                    "80px",
                    {
                        lineHeight: "80px",
                        letterSpacing: "-0.01em",
                    },
                ],
                "heading-md": [
                    "52px",
                    {
                        lineHeight: "62px",
                        letterSpacing: "-0.01em",
                    },
                ],
                "paragraph-overall": [
                    "16px",
                    {
                        lineHeight: "26px",
                        letterSpacing: "-0.01em",
                    },
                ],
            },
        },
    },
    plugins: [],
};
