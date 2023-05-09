import { BrowseContainer } from "../../containers";
import { useContent } from "../../hooks/useContent";
import { selectionFilter } from "../../utils";

const Browse = () => {

  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return (
    <BrowseContainer slides={slides} />
  )
}

export default Browse