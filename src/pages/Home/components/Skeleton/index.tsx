import { SkeletonCardContainer, SkeletonDescription, SkeletonFooter, SkeletonPrice, SkeletonSection, SkeletonTags, SkeletonText } from "./styles";

export function Skeleton() {
  const skeletonQuantity = Array.from({ length: 4 })

  return (
    <SkeletonSection>
      {skeletonQuantity.map((item, index) => (
        <SkeletonCardContainer key={index}>
          <SkeletonTags />
          <SkeletonText />
          <SkeletonDescription />
          <SkeletonFooter>
            <SkeletonPrice />
          </SkeletonFooter>
        </SkeletonCardContainer>
      ))}
    </SkeletonSection>
  );
}

