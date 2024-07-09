import React from "react";
import ContentLayout from "@/components/custom/content-layout";
import dynamic from 'next/dynamic'
const WangEditor = dynamic(
  () => import('@/components/custom/my-editor'),
  { ssr: false }
)

const PostPage = () => {
  return (
    <ContentLayout title="Post">
      <WangEditor />
    </ContentLayout>
  );
};

export default PostPage;
