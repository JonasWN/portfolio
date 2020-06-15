export const Theme = {
  color: {
    background: {
      site: "#F9FAFC",
      containerDark: "#0F1320",
      containerLight: "#F9FAFC",
    },
    font: {
      title: "#20204B",
      textDark: "#0F1320",
      textLight: "#F9FAFC",
    },
    accent: {
      bodo: "#FF027C",
      beige: "#FFECA7",
    },
  },

  fontSize: {
    sm: "1rem",
    md: "1.25rem",
    lg: "1.75rem",
    xl: "2.50rem",
  },

  shadow: {
    container: "1.5rem 2.5rem 5rem 0.7rem rgba(0,0,0,.13)",
  },
}

type ThemeType = typeof Theme

export type { ThemeType }
