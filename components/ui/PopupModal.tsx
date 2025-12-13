import CheckCircleIcon from "@/assets/icons/check-circle-icon.svg";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, ModalProps, TouchableOpacity, View } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";

export interface PopupModalProps extends Omit<ModalProps, "visible"> {
  /**
   * Controls whether the modal is visible
   */
  visible: boolean;

  /**
   * Called when the modal should be closed
   */
  onClose: () => void;

  /**
   * Modal title
   */
  title?: string;

  /**
   * Modal body/content
   */
  children?: React.ReactNode;

  /**
   * Modal description text
   */
  description?: string;

  /**
   * Primary action button configuration
   */
  primaryAction?: {
    label: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
  };

  /**
   * Secondary action button configuration
   */
  secondaryAction?: {
    label: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
  };

  /**
   * Whether to show a close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Size variant of the modal
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * NativeWind className for the container
   */
  containerClassName?: string;

  /**
   * NativeWind className for the content area
   */
  contentClassName?: string;

  /**
   * Variant type of the modal (success or destructive)
   * @default 'success'
   */
  variant?: "success" | "destructive";
}

/**
 * PopupModal Component
 * A reusable modal component with customizable actions, title, and content
 *
 * @example
 * const [visible, setVisible] = useState(false);
 *
 * &lt;PopupModal
 *   visible={visible}
 *   onClose={() => setVisible(false)}
 *   title="Confirm Action"
 *   description="Are you sure?"
 *   primaryAction={{
 *     label: "Confirm",
 *     onPress: () => { console.log('confirmed'); }
 *   }}
 *   secondaryAction={{
 *     label: "Cancel",
 *     onPress: () => setVisible(false)
 *   }}
 * /&gt;
 */
const PopupModal = React.forwardRef<View, PopupModalProps>(
  (
    {
      visible,
      onClose,
      title,
      children,
      description,
      primaryAction,
      secondaryAction,
      showCloseButton = true,
      size = "md",
      containerClassName,
      contentClassName,
      variant = "success",
      transparent = true,
      animationType = "fade",
      ...modalProps
    },
    ref
  ) => {
    const sizeStyles: Record<string, string> = {
      sm: "w-4/5 max-w-xs",
      md: "w-4/5 max-w-md",
      lg: "w-4/5 max-w-lg",
    };

    return (
      <Modal
        visible={visible}
        transparent={transparent}
        animationType={animationType}
        onRequestClose={onClose}
        {...modalProps}
      >
        {/* Semi-transparent backdrop */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          className="flex-1 bg-black/50 justify-center items-center"
        >
          {/* Modal container - prevent closing when clicking on modal */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
            ref={ref}
            className={`bg-white rounded-2xl shadow-lg ${sizeStyles[size]} ${containerClassName || ""}`}
          >
            {/* Close button */}
            {showCloseButton && (
              <TouchableOpacity
                onPress={onClose}
                className="absolute top-4 right-4 z-10 p-2"
              >
                <AppText className="text-lg font-bold text-gray-400">✕</AppText>
              </TouchableOpacity>
            )}

            {/* Content area */}
            <View
              className={`p-6 flex flex-col items-center ${contentClassName || ""}`}
            >
              {variant === "success" ? (
                <CheckCircleIcon className="mx-auto" />
              ) : (
                <MaterialIcons name="error" size={48} color="#ef4444" />
              )}
              {/* Title */}
              {title && (
                <AppText
                  variant="h3"
                  className={`text-lg font-bold text-center mt-3 mb-1 ${
                    variant === "destructive" ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  {title}
                </AppText>
              )}

              {/* Description */}
              {description && (
                <AppText className="text-sm text-center text-secondary">
                  {description}
                </AppText>
              )}

              {/* Children content */}
              {children && <View className="mb-6">{children}</View>}

              {/* Action buttons */}
              {(primaryAction || secondaryAction) && (
                <View className="flex-row gap-3 mt-6">
                  {secondaryAction && (
                    <AppButton
                      label={secondaryAction.label}
                      onPress={secondaryAction.onPress}
                      loading={secondaryAction.loading}
                      disabled={secondaryAction.disabled}
                      variant="outline"
                      className="flex-1"
                    />
                  )}
                  {primaryAction && (
                    <AppButton
                      label={primaryAction.label}
                      onPress={primaryAction.onPress}
                      loading={primaryAction.loading}
                      disabled={primaryAction.disabled}
                      variant={
                        variant === "destructive" ? "secondary" : "primary"
                      }
                      className="flex-1"
                    />
                  )}
                </View>
              )}
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  }
);

PopupModal.displayName = "PopupModal";

export default PopupModal;
