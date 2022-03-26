import React, { useEffect, useRef } from "react";
import "@aurodesignsystem/auro-avatar/dist/auro-avatar.js";

export function AuroAvatar({
  children,
  alt,
  ariaVisible,
  code,
  img,
  tail,
  type,
}) {
  const ref = useRef(null);

  /** Properties - run whenever a property has changed */

  useEffect(() => {
    if (alt !== undefined && ref.current.alt !== alt) {
      ref.current.alt = alt;
    }
  }, [alt]);

  useEffect(() => {
    if (ariaVisible !== undefined && ref.current.ariaVisible !== ariaVisible) {
      ref.current.ariaVisible = ariaVisible;
    }
  }, [ariaVisible]);

  useEffect(() => {
    if (code !== undefined && ref.current.code !== code) {
      ref.current.code = code;
    }
  }, [code]);

  useEffect(() => {
    if (img !== undefined && ref.current.img !== img) {
      ref.current.img = img;
    }
  }, [img]);

  useEffect(() => {
    if (tail !== undefined && ref.current.tail !== tail) {
      ref.current.tail = tail;
    }
  }, [tail]);

  useEffect(() => {
    if (type !== undefined && ref.current.type !== type) {
      ref.current.type = type;
    }
  }, [type]);

  return <auro-avatar ref={ref}>{children}</auro-avatar>;
}
