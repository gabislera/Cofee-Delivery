import styled, { keyframes } from 'styled-components';

export const SkeletonPulse = keyframes`
  0%, 100% {
    background-color: ${({ theme }) => theme.colors['base-card']};
  }
  50% {
    background-color: rgba(215, 213, 213, 0.5);
  }
`;

export const SkeletonSection = styled.div`
  display: flex;
  gap: 2rem;
`

export const SkeletonCardContainer = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background: ${({ theme }) => theme.colors['base-card']};

  padding: 0 1.25rem 1.25rem; 
  border-radius: 0.375rem 2.25rem; 
  animation: ${SkeletonPulse} 1s infinite;
`;

export const SkeletonTags = styled.div`
  margin-top: 9.312rem;
  width: 100%;
  height: 1rem; 
  background: ${({ theme }) => theme.colors['base-hover']};
  margin-bottom: 1rem; 
`;

export const SkeletonText = styled.div`
  width: 100%;
  height: 1rem; 
  background: ${({ theme }) => theme.colors['base-hover']};
  
  margin-bottom: 0.5rem; 
`;

export const SkeletonDescription = styled.div`
  width: 100%;
  height: 3.125rem; 
  background: ${({ theme }) => theme.colors['base-hover']};
  
  margin-bottom: 2.0625rem; 
`;

export const SkeletonFooter = styled.div`
  width: 12.75rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkeletonPrice = styled.div`
  width: 5rem; 
  height: 1rem; 
  background: ${({ theme }) => theme.colors['base-hover']};
  `;