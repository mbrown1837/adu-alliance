import sanitizeHtmlPackage from 'sanitize-html';

/**
 * ADU Alliance Blog Parser-Backed HTML Sanitizer
 * Utilizes the maintained `htmlparser2`-backed `sanitize-html` engine with a strict allowlist.
 * Applies an HTML allowlist, strips event handlers and restricts URL protocols.
 */

const SANITIZER_OPTIONS: sanitizeHtmlPackage.IOptions = {
  allowedTags: [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'u',
    'blockquote', 'code', 'pre', 'hr', 'br',
    'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
    'a', 'img', 'div', 'span', 'figure', 'figcaption'
  ],
  allowedAttributes: {
    '*': ['id', 'class', 'title', 'aria-label', 'aria-labelledby', 'data-section'],
    'a': ['href', 'target', 'rel'],
    'img': ['src', 'alt', 'width', 'height', 'loading'],
    'th': ['scope', 'colspan', 'rowspan'],
    'td': ['colspan', 'rowspan']
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: {
    a: ['http', 'https', 'mailto'],
    img: ['http', 'https']
  },
  allowProtocolRelative: false,
  disallowedTagsMode: 'discard',
  nonTextTags: ['script', 'style', 'textarea', 'option', 'noscript', 'iframe', 'embed', 'object'],
  transformTags: {
    'a': (tagName, attribs) => {
      // Force rel="noopener noreferrer" on external links
      if (attribs.target === '_blank' || (attribs.href && /^https?:/i.test(attribs.href))) {
        return {
          tagName: 'a',
          attribs: {
            ...attribs,
            rel: 'noopener noreferrer'
          }
        };
      }
      return {
        tagName: 'a',
        attribs
      };
    }
  }
};

/**
 * Sanitizes an untrusted or CMS-provided HTML string using a parser-backed AST engine.
 * Preserves structural heading IDs, citations, responsive tables, and valid images
 * while completely discarding forbidden tags, event handlers, and malformed script payloads.
 */
export function sanitizeHtml(rawHtml: string): string {
  if (!rawHtml || typeof rawHtml !== 'string') {
    return '';
  }

  return sanitizeHtmlPackage(rawHtml, SANITIZER_OPTIONS);
}
