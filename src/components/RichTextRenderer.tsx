import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES } from "@contentful/rich-text-types";
import { ReactNode } from "react";

interface RichTextRendererProps {
  document: Document;
}

const RichTextRenderer = ({ document }: RichTextRendererProps) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: ReactNode) => (
        <h1 className="text-4xl font-bold mb-4 text-[#ccd6f6]">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => (
        <h2 className="text-3xl font-bold mb-3 text-[#ccd6f6]">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3 className="text-2xl font-bold mb-2 text-[#ccd6f6]">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <p className="text-[#8892b0] mb-4 leading-relaxed">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] list-disc pl-5 pt-2 mb-2 text-[#8892b0] text-sm">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <ol className="list-decimal pl-5 mb-4 text-[#8892b0]">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) => (
        <li className="mb-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: ReactNode) => (
        <blockquote className="border-l-4 border-[#64ffda] pl-4 italic text-[#8892b0] mb-4">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda]"
        >
          {children}
        </a>
      ),
    },
    renderText: (text: string) => {
      return text
        .split("\n")
        .flatMap((text, i) => [i > 0 && <br key={i} />, text]);
    },
  };

  return <div>{documentToReactComponents(document, options)}</div>;
};

export default RichTextRenderer;
