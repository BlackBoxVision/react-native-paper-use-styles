import { useMemo } from 'react';
import { useTheme } from 'react-native-paper';
import type { Theme } from 'react-native-paper/lib/typescript/types';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styleArgs:
    | T
    | NamedStyles<T>
    | ((theme: Theme, props: any) => T | NamedStyles<T>)
) {
  return function useStyles(props?: any): T {
    const theme = useTheme();

    let styles: any = null;

    if (typeof styleArgs === 'function') {
      styles = styleArgs(theme, props);
    } else {
      styles = styleArgs as T | NamedStyles<T>;
    }

    return useMemo(() => StyleSheet.create(styles), [styles]);
  };
}
