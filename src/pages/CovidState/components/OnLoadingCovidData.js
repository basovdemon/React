import { Container, CircularProgress } from "@material-ui/core";

export function OnLoadingCovidData(Component) {
    return function LoadingCovidData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        else
            return (
                <Container
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <CircularProgress />
                </Container>
            );
    };
}
